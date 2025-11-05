# Design Document

## Overview

This design integrates OpenAI's GPT-3.5-turbo or GPT-4 model into the existing MRECAI chatbot system. The integration will enhance the chatbot's ability to understand and respond to user queries naturally while maintaining strict boundaries through a comprehensive system prompt. The design ensures backward compatibility by keeping the existing knowledge base as a fallback mechanism.

## Architecture

### High-Level Architecture

```
┌─────────────────┐
│   Frontend      │
│   AIChat.tsx    │
└────────┬────────┘
         │ HTTP POST /api/ai-chat/message
         │ { message, conversationHistory }
         ▼
┌─────────────────────────────────────────┐
│   Backend API Layer                     │
│   aiChatRoutes.ts → aiChatController.ts │
└────────┬────────────────────────────────┘
         │
         ├─────────────────┐
         ▼                 ▼
┌──────────────────┐  ┌──────────────────┐
│  OpenAI Service  │  │  Knowledge Base  │
│  (Primary)       │  │  (Fallback)      │
└──────────────────┘  └──────────────────┘
```

### Component Interaction Flow

1. User sends message through frontend chat interface
2. Frontend sends message + conversation history to backend API
3. Backend attempts OpenAI API call with system prompt and context
4. If OpenAI succeeds: Return AI-generated response
5. If OpenAI fails: Fall back to knowledge base response
6. Frontend displays response to user

## Components and Interfaces

### 1. OpenAI Service Module (`server/src/services/openaiService.ts`)

**Purpose**: Encapsulate all OpenAI API interactions

**Interface**:
```typescript
interface OpenAIServiceConfig {
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenAIResponse {
  message: string;
  tokensUsed: number;
  model: string;
}

class OpenAIService {
  constructor(config: OpenAIServiceConfig);
  
  async generateResponse(
    userMessage: string,
    conversationHistory: ChatMessage[]
  ): Promise<OpenAIResponse>;
  
  buildSystemPrompt(): string;
  formatConversationHistory(history: any[]): ChatMessage[];
}
```

**Key Methods**:
- `generateResponse()`: Main method to get AI responses
- `buildSystemPrompt()`: Constructs the comprehensive system prompt with MRECAI context
- `formatConversationHistory()`: Converts frontend history to OpenAI format

### 2. Updated AI Chat Controller (`server/src/controllers/aiChatController.ts`)

**Purpose**: Orchestrate between OpenAI service and knowledge base fallback

**Logic Flow**:
```typescript
async sendMessage(req, res) {
  1. Validate request (message, optional conversationHistory)
  2. Try OpenAI service:
     - Call openaiService.generateResponse()
     - Log success metrics
     - Return response with source: 'openai'
  3. Catch errors:
     - Log error details
     - Fall back to knowledgeBase.getResponse()
     - Return response with source: 'knowledge_base'
  4. Always return 200 with appropriate response
}
```

### 3. Frontend Updates (`client/src/components/features/AIChat.tsx`)

**Changes**:
- Keep existing `getKnowledgeBaseResponse()` as client-side fallback
- Update `handleSendMessage()` to send conversation history
- Maintain last 5 messages in state for context
- Handle loading states during API calls
- Display responses with proper formatting

**New State**:
```typescript
const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
```

## Data Models

### Request Model
```typescript
interface ChatRequest {
  message: string;
  conversationHistory?: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}
```

### Response Model
```typescript
interface ChatResponse {
  success: boolean;
  data: {
    message: string;
    timestamp: Date;
    source: 'openai' | 'knowledge_base';
    tokensUsed?: number;
    model?: string;
  };
  error?: string;
}
```

### Logging Model
```typescript
interface ChatLogEntry {
  timestamp: Date;
  source: 'openai' | 'knowledge_base';
  success: boolean;
  tokensUsed?: number;
  responseTime: number;
  errorMessage?: string;
}
```

## System Prompt Design

The system prompt is the most critical component for maintaining boundaries. It will include:

### Structure
```
1. Role Definition
   - You are the MRECAI AI assistant
   - Your purpose is to help visitors learn about MRE Consulting & Insurance services
   - You represent a forward-thinking firm dedicated to empowering individuals, families, and businesses

2. Strict Boundaries
   - ONLY answer questions about MRECAI services, offerings, and related business topics
   - Refuse politely for out-of-scope topics (competitors, politics, personal advice, general knowledge)
   - Never discuss topics unrelated to MRECAI's business
   - If asked about non-MRECAI topics, redirect to services and contact information

3. Company Information
   - Company Name: MRE Consulting & Insurance (MRECAI)
   - Founded: 2024 (new, innovative firm)
   - Clients Served: 500+
   - Success Rate: 98%
   - Client Rating: 4.9/5
   - Support: 24/7 service support
   - Contact: 929-919-3574, Matthew@MRECAI.com
   - Founder: Matthew Epstein (President & Founder)

4. Service Categories
   - Business Consulting: Strategic planning, financial analysis, operational efficiency, growth strategy, market analysis
   - Digital Marketing: SEO, content marketing, social media management, PPC advertising, analytics, brand strategy, email marketing
   - Insurance Services: Homeowners, Auto (Personal & Commercial), Commercial, Personal Umbrella, Condo, Professional Liability (E&O)
   - Tax & Accounting: Tax planning & preparation, bookkeeping & payroll, financial statements, IRS representation
   - AI & Technology: AI implementation consulting, process automation, technology stack optimization, digital transformation
   - Automation: Workflow automation, custom automation development, integration with existing systems

5. Strategic Partners
   - NovaEdge Solutions: 15+ years in software development, AI-driven digital transformation, full-stack development
   - Grober Imbey Insurance Agency (GIA): 50+ years experience (founded 1970s), independent brokerage, represents top carriers (Chubb, AIG, Pure, Travelers, Hartford)

6. Important Routes
   - /book-now - Schedule free consultation
   - /intake-forms - Get insurance quotes (7 forms available)
   - /services - View all services
   - /contact - Contact form
   - /about - Company information
   - /about/founder - About Matthew Epstein
   - /about/partners - Strategic partners
   - /ai-consulting - AI consulting services
   - /testimonials - Client reviews

7. Response Guidelines
   - Be friendly, professional, and conversational
   - Use emojis sparingly for visual appeal (✓, 📞, 📧, 📅, 🏠, 🚗, 🏢, 💼, 🤖, ⚙️)
   - Provide specific contact info when relevant
   - Format links as /route-name (clickable in frontend)
   - Keep responses concise but informative (2-4 paragraphs max)
   - Emphasize free consultation and 24/7 availability
   - Highlight key differentiators: 98% success rate, 500+ clients, innovative AI solutions

8. Refusal Template
   "I'm specifically designed to help with MRECAI services and offerings. 
   For questions about [topic], I'd recommend contacting our team directly 
   at 929-919-3574 or booking a free consultation at /book-now where our 
   experts can provide personalized assistance."

9. Key Messaging Points
   - Free initial consultation (no obligation)
   - 24/7 service support
   - Transparent pricing, no hidden fees
   - Comprehensive solutions (consulting + insurance + technology)
   - Proven track record (98% success rate, 500+ clients)
   - Cutting-edge AI and automation expertise
   - Personalized, client-focused approach
```

## Error Handling

### Error Scenarios and Responses

1. **OpenAI API Key Missing**
   - Detection: Check `process.env.OPENAI_API_KEY` on startup
   - Action: Log warning, use knowledge base only
   - User Impact: None (seamless fallback)

2. **OpenAI API Error (4xx)**
   - Detection: Catch API error responses
   - Action: Log error, fall back to knowledge base
   - User Impact: None (seamless fallback)

3. **OpenAI API Timeout**
   - Detection: Set 10-second timeout on requests
   - Action: Cancel request, use knowledge base
   - User Impact: Slight delay, then response

4. **Rate Limit Exceeded**
   - Detection: 429 status code from OpenAI
   - Action: Fall back to knowledge base, log incident
   - User Impact: None (seamless fallback)

5. **Invalid Response Format**
   - Detection: Response validation fails
   - Action: Log error, use knowledge base
   - User Impact: None (seamless fallback)

### Error Logging Strategy
```typescript
interface ErrorLog {
  timestamp: Date;
  errorType: 'api_key' | 'timeout' | 'rate_limit' | 'api_error' | 'validation';
  errorMessage: string;
  fallbackUsed: boolean;
}
```

## Testing Strategy

### Unit Tests

1. **OpenAI Service Tests**
   - Test system prompt generation
   - Test conversation history formatting
   - Test error handling for various API failures
   - Mock OpenAI API responses

2. **Controller Tests**
   - Test successful OpenAI response flow
   - Test fallback to knowledge base
   - Test request validation
   - Test response formatting

3. **Knowledge Base Tests**
   - Ensure existing functionality remains intact
   - Test fallback responses

### Integration Tests

1. **End-to-End Chat Flow**
   - Send message → Receive OpenAI response
   - Send message → OpenAI fails → Receive knowledge base response
   - Multi-turn conversation with context

2. **Boundary Testing**
   - Ask out-of-scope questions → Verify refusal
   - Ask about MRECAI services → Verify accurate response
   - Ask about competitors → Verify polite refusal

3. **Error Scenarios**
   - Invalid API key → Verify fallback
   - Network timeout → Verify fallback
   - Rate limit → Verify fallback

### Manual Testing Checklist

- [ ] Chatbot responds naturally to service inquiries
- [ ] Chatbot refuses non-MRECAI topics politely
- [ ] Contact information is accurate in responses
- [ ] Links are properly formatted and clickable
- [ ] Conversation context is maintained across messages
- [ ] Fallback works when OpenAI is unavailable
- [ ] Loading states display correctly
- [ ] Error messages are user-friendly

## Configuration

### Environment Variables

**Server (.env)**
```bash
# OpenAI Configuration
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-3.5-turbo  # or gpt-4
OPENAI_MAX_TOKENS=500
OPENAI_TEMPERATURE=0.7
OPENAI_TIMEOUT_MS=10000

# Existing variables remain unchanged
```

**Defaults** (if not specified):
- Model: gpt-3.5-turbo (cost-effective)
- Max Tokens: 500 (sufficient for chatbot responses)
- Temperature: 0.7 (balanced creativity and consistency)
- Timeout: 10000ms (10 seconds)

### Model Selection Rationale

**GPT-3.5-turbo** (Recommended for production):
- Cost: ~$0.002 per 1K tokens
- Speed: Fast responses (1-2 seconds)
- Quality: Excellent for customer service
- Estimated cost: ~$10-20/month for typical traffic

**GPT-4** (Optional for premium experience):
- Cost: ~$0.03 per 1K tokens (15x more expensive)
- Speed: Slower (2-4 seconds)
- Quality: Superior understanding
- Use case: High-value client interactions

## Security Considerations

1. **API Key Protection**
   - Store in environment variables only
   - Never commit to version control
   - Use different keys for dev/staging/production

2. **Input Validation**
   - Sanitize user messages
   - Limit message length (max 1000 characters)
   - Rate limiting on API endpoint (existing)

3. **Output Sanitization**
   - Validate OpenAI responses before sending to frontend
   - Strip any potentially harmful content
   - Ensure responses don't leak system prompt

4. **Privacy**
   - Don't log user messages (GDPR compliance)
   - Only log metadata (timestamp, tokens, success/failure)
   - Don't send conversation history to OpenAI beyond 5 messages

## Performance Optimization

1. **Response Time**
   - Target: < 3 seconds for 95% of requests
   - Timeout: 10 seconds maximum
   - Fallback: Instant knowledge base response

2. **Token Usage**
   - Limit conversation history to 5 messages
   - Optimize system prompt length
   - Set max_tokens to 500

3. **Caching Strategy**
   - Cache common questions/responses (future enhancement)
   - Use knowledge base for exact matches
   - Only call OpenAI for complex queries

4. **Cost Management**
   - Monitor daily token usage
   - Set up alerts for unusual spikes
   - Consider caching for frequently asked questions

## Monitoring and Metrics

### Key Metrics to Track

1. **Usage Metrics**
   - Total API calls per day
   - OpenAI vs Knowledge Base ratio
   - Average tokens per request
   - Peak usage times

2. **Performance Metrics**
   - Average response time
   - 95th percentile response time
   - Timeout rate
   - Error rate

3. **Cost Metrics**
   - Daily token usage
   - Estimated daily cost
   - Cost per conversation
   - Monthly projection

4. **Quality Metrics**
   - User satisfaction (future: thumbs up/down)
   - Conversation length (engagement)
   - Fallback rate (indicates issues)

### Logging Implementation
```typescript
// Log format
{
  timestamp: "2024-01-15T10:30:00Z",
  source: "openai",
  success: true,
  tokensUsed: 245,
  responseTime: 1850,
  model: "gpt-3.5-turbo"
}
```

## Migration Strategy

### Phase 1: Development
1. Create OpenAI service module
2. Update controller with fallback logic
3. Add environment variables
4. Test with development API key

### Phase 2: Testing
1. Unit tests for all components
2. Integration tests for chat flow
3. Manual testing of boundary cases
4. Performance testing

### Phase 3: Deployment
1. Deploy to staging environment
2. Monitor for 48 hours
3. Verify fallback mechanism works
4. Check cost projections

### Phase 4: Production
1. Deploy to production
2. Monitor metrics closely for first week
3. Gather user feedback
4. Optimize based on real usage

## Rollback Plan

If issues arise:
1. Set `OPENAI_API_KEY` to empty string
2. System automatically uses knowledge base only
3. No code changes required
4. Zero downtime

## Future Enhancements

1. **Response Caching**
   - Cache common questions
   - Reduce API costs
   - Faster responses

2. **User Feedback**
   - Thumbs up/down on responses
   - Improve system prompt based on feedback
   - Track satisfaction metrics

3. **Advanced Context**
   - Remember user preferences in session
   - Personalize responses
   - Track user journey

4. **A/B Testing**
   - Test different system prompts
   - Compare GPT-3.5 vs GPT-4
   - Optimize temperature settings

5. **Analytics Dashboard**
   - Real-time usage metrics
   - Cost tracking
   - Quality monitoring
