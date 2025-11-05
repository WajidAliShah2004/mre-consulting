import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import knowledgeBase from '../utils/knowledgeBase';
import { OpenAIService } from '../services/openaiService';

// Initialize OpenAI service with environment variables
let openaiService: OpenAIService | null = null;

// Check if OpenAI API key exists and initialize service
if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.trim() !== '') {
  openaiService = new OpenAIService({
    apiKey: process.env.OPENAI_API_KEY,
    model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
    maxTokens: parseInt(process.env.OPENAI_MAX_TOKENS || '500'),
    temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.7'),
    timeoutMs: parseInt(process.env.OPENAI_TIMEOUT_MS || '10000'),
  });

  if (openaiService.isConfigured()) {
    console.log('✓ OpenAI service initialized successfully');
  } else {
    console.warn('⚠ OpenAI service initialization failed, using knowledge base only');
    openaiService = null;
  }
} else {
  console.warn('⚠ OPENAI_API_KEY not found, using knowledge base only');
}

/**
 * Interface for logging chat interactions
 */
interface ChatLogEntry {
  timestamp: Date;
  source: 'openai' | 'knowledge_base';
  success: boolean;
  tokensUsed?: number;
  responseTime: number;
  errorType?: string;
  errorMessage?: string;
  fallbackUsed?: boolean;
}

/**
 * Log chat interaction for monitoring and analytics
 * Does NOT log user message content for privacy (GDPR compliance)
 */
function logChatInteraction(logEntry: ChatLogEntry): void {
  const logMessage = {
    timestamp: logEntry.timestamp.toISOString(),
    source: logEntry.source,
    success: logEntry.success,
    responseTime: `${logEntry.responseTime}ms`,
    ...(logEntry.tokensUsed && { tokensUsed: logEntry.tokensUsed }),
    ...(logEntry.errorType && { errorType: logEntry.errorType }),
    ...(logEntry.errorMessage && { errorMessage: logEntry.errorMessage }),
    ...(logEntry.fallbackUsed !== undefined && { fallbackUsed: logEntry.fallbackUsed }),
  };

  if (logEntry.success) {
    console.log('✓ Chat interaction:', JSON.stringify(logMessage));
  } else {
    console.error('✗ Chat interaction error:', JSON.stringify(logMessage));
  }
}

export const sendMessage = async (req: Request, res: Response): Promise<void> => {
  const startTime = Date.now();

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { message, conversationHistory } = req.body;

    // Try OpenAI service first if configured
    if (openaiService && openaiService.isConfigured()) {
      try {
        const openaiResponse = await openaiService.generateResponse(
          message,
          conversationHistory || []
        );

        const responseTime = Date.now() - startTime;

        // Log successful OpenAI call
        logChatInteraction({
          timestamp: new Date(),
          source: 'openai',
          success: true,
          tokensUsed: openaiResponse.tokensUsed,
          responseTime,
        });

        // Return OpenAI response with metadata
        res.status(200).json({
          success: true,
          data: {
            message: openaiResponse.message,
            timestamp: new Date(),
            source: 'openai',
            tokensUsed: openaiResponse.tokensUsed,
            model: openaiResponse.model,
          },
        });
        return;
      } catch (error: any) {
        const responseTime = Date.now() - startTime;

        // Determine error type
        let errorType = 'unknown';
        if (error.message?.includes('timeout')) {
          errorType = 'timeout';
        } else if (error.message?.includes('rate limit')) {
          errorType = 'rate_limit';
        } else if (error.message?.includes('API key')) {
          errorType = 'api_key';
        } else if (error.message?.includes('server error')) {
          errorType = 'api_error';
        }

        // Log error with fallback flag
        logChatInteraction({
          timestamp: new Date(),
          source: 'openai',
          success: false,
          responseTime,
          errorType,
          errorMessage: error.message || 'Unknown error',
          fallbackUsed: true,
        });

        // Fall through to knowledge base fallback
        console.log('→ Falling back to knowledge base');
      }
    }

    // Fallback to knowledge base (either OpenAI not configured or error occurred)
    const responseTime = Date.now() - startTime;
    const response = knowledgeBase.getResponse(message);

    // Log knowledge base response
    logChatInteraction({
      timestamp: new Date(),
      source: 'knowledge_base',
      success: true,
      responseTime,
    });

    res.status(200).json({
      success: true,
      data: {
        message: response,
        timestamp: new Date(),
        source: 'knowledge_base',
      },
    });
  } catch (error) {
    const responseTime = Date.now() - startTime;

    // Log unexpected error
    logChatInteraction({
      timestamp: new Date(),
      source: 'knowledge_base',
      success: false,
      responseTime,
      errorType: 'unexpected',
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
    });

    console.error('AI chat error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process message',
    });
  }
};
