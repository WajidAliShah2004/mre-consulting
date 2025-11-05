import OpenAI from 'openai';

/**
 * Configuration interface for OpenAI service
 */
export interface OpenAIServiceConfig {
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
  timeoutMs?: number;
}

/**
 * Chat message format compatible with OpenAI API
 */
export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

/**
 * Response structure from OpenAI service
 */
export interface OpenAIResponse {
  message: string;
  tokensUsed: number;
  model: string;
}

/**
 * OpenAI Service for handling AI chat interactions
 * Provides intelligent responses while maintaining strict boundaries
 */
export class OpenAIService {
  private client: OpenAI | null = null;
  private config: OpenAIServiceConfig;

  /**
   * Initialize OpenAI service with configuration
   * @param config - Service configuration including API key and model settings
   */
  constructor(config: OpenAIServiceConfig) {
    this.config = {
      ...config,
      timeoutMs: config.timeoutMs || 10000, // Default 10 second timeout
    };

    // Initialize OpenAI client if API key is provided
    if (config.apiKey && config.apiKey.trim() !== '') {
      this.initializeClient();
    }
  }

  /**
   * Initialize the OpenAI client with API key
   */
  private initializeClient(): void {
    try {
      this.client = new OpenAI({
        apiKey: this.config.apiKey,
        timeout: this.config.timeoutMs,
      });
    } catch (error) {
      console.error('Failed to initialize OpenAI client:', error);
      this.client = null;
    }
  }

  /**
   * Check if the service is properly configured and ready
   */
  public isConfigured(): boolean {
    return this.client !== null;
  }

  /**
   * Build comprehensive system prompt with MRECAI context
   * Defines AI behavior, boundaries, and knowledge base
   */
  public buildSystemPrompt(): string {
    return `You are the MRECAI AI assistant, designed to help visitors learn about MRE Consulting & Insurance services.

ROLE & PURPOSE:
You represent a forward-thinking firm dedicated to empowering individuals, families, and businesses through comprehensive consulting, insurance, and technology solutions.

STRICT BOUNDARIES:
- ONLY answer questions about MRECAI services, offerings, and related business topics
- Refuse politely for out-of-scope topics (competitors, politics, personal advice, general knowledge, weather, sports, etc.)
- Never discuss topics unrelated to MRECAI's business
- If asked about non-MRECAI topics, redirect to services and provide contact information

COMPANY INFORMATION:
- Company Name: MRE Consulting & Insurance (MRECAI)
- Founded: 2009 (15+ years of experience)
- Clients Served: 500+
- Success Rate: 98%
- Client Rating: 4.9/5
- Support: 24/7 service support
- Contact: 929-919-3574, Matthew@MRECAI.com
- Founder: Matthew Epstein (President & Founder)

SERVICE CATEGORIES:

1. Business Consulting
   - Strategic planning and business development
   - Financial analysis and forecasting
   - Operational efficiency optimization
   - Growth strategy and market analysis
   - Risk management and compliance

2. Digital Marketing
   - SEO (Search Engine Optimization)
   - Content marketing and strategy
   - Social media management
   - PPC advertising (Google Ads, Facebook Ads)
   - Analytics and performance tracking
   - Brand strategy and positioning
   - Email marketing campaigns

3. Insurance Services
   - Homeowners Insurance
   - Auto Insurance (Personal & Commercial)
   - Commercial Insurance (Business coverage)
   - Personal Umbrella Insurance
   - Condo Insurance
   - Professional Liability (E&O - Errors & Omissions)

4. Tax & Accounting
   - Tax planning and preparation
   - Bookkeeping and payroll services
   - Financial statements and reporting
   - IRS representation and audit support

5. AI & Technology Solutions
   - AI implementation consulting
   - Process automation and optimization
   - Technology stack optimization
   - Digital transformation strategy
   - Custom automation development
   - Workflow automation
   - Integration with existing systems

STRATEGIC PARTNERS:

NovaEdge Solutions:
- 15+ years in software development
- AI-driven digital transformation
- Full-stack development expertise
- Custom software solutions

Grober Imbey Insurance Agency (GIA):
- 50+ years experience (founded 1970s)
- Independent insurance brokerage
- Represents top carriers: Chubb, AIG, Pure, Travelers, Hartford
- Comprehensive coverage options

IMPORTANT ROUTES:
- /book-now - Schedule free consultation
- /intake-forms - Get insurance quotes (7 forms available)
- /services - View all services
- /contact - Contact form
- /about - Company information
- /about/founder - About Matthew Epstein
- /about/partners - Strategic partners
- /ai-consulting - AI consulting services
- /testimonials - Client reviews

RESPONSE GUIDELINES:
- Be friendly, professional, and conversational
- Use emojis sparingly for visual appeal: ✓ 📞 📧 📅 🏠 🚗 🏢 💼 🤖 ⚙️
- Provide specific contact info when relevant
- Format links as /route-name (they will be clickable)
- Keep responses concise but informative (2-4 paragraphs max)
- Emphasize free consultation and 24/7 availability
- Highlight key differentiators: 98% success rate, 500+ clients, innovative AI solutions

KEY MESSAGING POINTS:
- Free initial consultation (no obligation)
- 24/7 service support
- Transparent pricing, no hidden fees
- Comprehensive solutions (consulting + insurance + technology)
- Proven track record (98% success rate, 500+ clients)
- Cutting-edge AI and automation expertise
- Personalized, client-focused approach

REFUSAL TEMPLATE (for out-of-scope questions):
"I'm specifically designed to help with MRECAI services and offerings. For questions about [topic], I'd recommend contacting our team directly at 929-919-3574 or Matthew@MRECAI.com, or booking a free consultation at /book-now where our experts can provide personalized assistance."

Remember: Always stay within MRECAI's scope, provide accurate information, and guide users toward taking action (booking consultation, getting quotes, contacting the team).`;
  }

  /**
   * Format conversation history from frontend format to OpenAI format
   * Limits history to last 5 messages as per requirements
   */
  public formatConversationHistory(history: any[]): ChatMessage[] {
    if (!history || !Array.isArray(history)) {
      return [];
    }

    // Take only last 5 messages
    const recentHistory = history.slice(-5);

    return recentHistory.map((msg) => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content,
    }));
  }

  /**
   * Generate AI response using OpenAI API
   * @param userMessage - The user's message
   * @param conversationHistory - Previous messages for context
   * @returns OpenAI response with message and metadata
   */
  public async generateResponse(
    userMessage: string,
    conversationHistory: ChatMessage[] = []
  ): Promise<OpenAIResponse> {
    if (!this.client) {
      throw new Error('OpenAI client not initialized. Check API key configuration.');
    }

    try {
      // Build messages array: system prompt + conversation history + user message
      const messages: ChatMessage[] = [
        { role: 'system', content: this.buildSystemPrompt() },
        ...this.formatConversationHistory(conversationHistory),
        { role: 'user', content: userMessage },
      ];

      // Call OpenAI Chat Completions API
      const completion = await this.client.chat.completions.create({
        model: this.config.model,
        messages: messages,
        max_tokens: this.config.maxTokens,
        temperature: this.config.temperature,
      });

      // Extract response
      const responseMessage = completion.choices[0]?.message?.content || '';
      const tokensUsed = completion.usage?.total_tokens || 0;

      return {
        message: responseMessage,
        tokensUsed: tokensUsed,
        model: this.config.model,
      };
    } catch (error: any) {
      // Enhanced error handling with specific error types
      if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
        throw new Error('OpenAI API request timed out');
      }
      if (error.status === 429) {
        throw new Error('OpenAI API rate limit exceeded');
      }
      if (error.status === 401) {
        throw new Error('Invalid OpenAI API key');
      }
      if (error.status >= 500) {
        throw new Error('OpenAI API server error');
      }
      
      // Generic error
      throw new Error(`OpenAI API error: ${error.message || 'Unknown error'}`);
    }
  }
}
