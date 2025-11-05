# Implementation Plan

- [x] 1. Set up OpenAI service infrastructure





  - Create OpenAI service module with configuration and API client
  - Implement system prompt builder with comprehensive MRECAI context
  - Add environment variable configuration for OpenAI settings
  - _Requirements: 1.1, 3.1, 3.2, 3.5_

- [x] 1.1 Create OpenAI service module


  - Write `server/src/services/openaiService.ts` with OpenAIService class
  - Implement constructor that accepts configuration (apiKey, model, maxTokens, temperature)
  - Add method to initialize OpenAI client from the openai npm package
  - _Requirements: 1.1, 3.1, 3.2_

- [x] 1.2 Implement system prompt builder

  - Create `buildSystemPrompt()` method that returns comprehensive prompt string
  - Include role definition, strict boundaries, and refusal guidelines
  - Add all MRECAI service details (Business Consulting, Insurance, Tax, Marketing, AI/Tech)
  - Include company information (founded 2024, contact: 929-919-3574, Matthew@MRECAI.com)
  - Add important routes (/book-now, /intake-forms, /services, /contact, /about)
  - Include response formatting guidelines (emojis, links, tone)
  - _Requirements: 2.1, 2.2, 2.3, 6.1, 6.2, 6.3_

- [x] 1.3 Add environment variable configuration


  - Update `server/.env` with OPENAI_API_KEY, OPENAI_MODEL, OPENAI_MAX_TOKENS, OPENAI_TEMPERATURE, OPENAI_TIMEOUT_MS
  - Add validation in service to check if API key exists
  - Set default values for optional configuration (model: gpt-3.5-turbo, maxTokens: 500, temperature: 0.7)
  - _Requirements: 3.1, 3.2, 3.5_

- [x] 2. Implement core OpenAI integration logic





  - Create conversation history formatting method
  - Implement main response generation method with error handling
  - Add timeout and retry logic for API calls
  - _Requirements: 1.1, 1.2, 4.1, 4.2, 4.3, 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 2.1 Create conversation history formatter


  - Implement `formatConversationHistory()` method that converts frontend format to OpenAI format
  - Transform messages to OpenAI ChatMessage format with role ('user' | 'assistant') and content
  - Limit history to last 5 messages as specified in requirements
  - Handle empty or undefined conversation history gracefully
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 2.2 Implement response generation method

  - Create `generateResponse()` async method that accepts userMessage and conversationHistory
  - Build messages array: [system prompt, ...conversation history, user message]
  - Call OpenAI Chat Completions API with configured model and parameters
  - Extract response text and token usage from API response
  - Return structured OpenAIResponse object with message, tokensUsed, and model
  - _Requirements: 1.1, 1.2, 7.5_

- [x] 2.3 Add error handling and timeout logic

  - Wrap OpenAI API call in try-catch block
  - Set timeout of 10 seconds using AbortController or axios timeout
  - Handle specific error types: API errors, timeouts, rate limits, network errors
  - Throw descriptive errors that can be caught by controller for fallback
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 3. Update AI chat controller with OpenAI integration





  - Modify controller to use OpenAI service as primary response method
  - Implement fallback logic to knowledge base on errors
  - Add logging for API calls, errors, and token usage
  - Update response format to include source and metadata
  - _Requirements: 1.1, 1.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4, 4.5, 5.1, 5.2, 5.3, 5.4_

- [x] 3.1 Integrate OpenAI service in controller


  - Import OpenAIService in `server/src/controllers/aiChatController.ts`
  - Initialize OpenAI service with environment variables
  - Check if OPENAI_API_KEY exists; if not, skip to knowledge base fallback
  - Call `openaiService.generateResponse()` with user message and conversation history
  - _Requirements: 1.1, 3.2, 3.3_

- [x] 3.2 Implement fallback mechanism

  - Wrap OpenAI call in try-catch block
  - On any error, log the error details (type, message, timestamp)
  - Fall back to existing `knowledgeBase.getResponse()` method
  - Ensure fallback is seamless with no user-facing error messages
  - _Requirements: 3.3, 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 3.3 Add comprehensive logging

  - Log successful OpenAI calls with timestamp, tokensUsed, responseTime, model
  - Log errors with timestamp, errorType, errorMessage, fallbackUsed flag
  - Log source of response ('openai' or 'knowledge_base') for tracking
  - Do NOT log user message content for privacy (GDPR compliance)
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 3.4_


- [x] 3.4 Update response format





  - Return response with success: true, data object containing message, timestamp, source
  - Include tokensUsed and model in response when source is 'openai'
  - Maintain consistent response structure for both OpenAI and knowledge base responses
  - _Requirements: 5.3_

- [x] 4. Update frontend to support conversation history





  - Add conversation history state management
  - Update message sending to include last 5 messages as context
  - Maintain compatibility with existing UI and error handling
  - _Requirements: 1.4, 7.1, 7.2, 7.3_


- [x] 4.1 Add conversation history state

  - Add `conversationHistory` state in `client/src/components/features/AIChat.tsx`
  - Update state type to store array of messages with role and content
  - Initialize as empty array
  - _Requirements: 7.1, 7.2_

- [x] 4.2 Update message handling to track history


  - When user sends message, add to conversation history with role: 'user'
  - When bot responds, add to conversation history with role: 'assistant'
  - Limit conversation history to last 5 messages (remove oldest when exceeding)
  - _Requirements: 7.1, 7.2, 7.3_

- [x] 4.3 Send conversation history to API

  - Update `handleSendMessage()` to pass conversationHistory to `sendChatMessage()` API call
  - Format history as array of objects with role and content fields
  - Ensure API call includes both message and conversationHistory parameters
  - _Requirements: 1.4, 7.4_

- [ ] 5. Install OpenAI npm package and update dependencies
  - Install openai package in server
  - Update package.json with correct version
  - Verify TypeScript types are available
  - _Requirements: 1.1_

- [ ] 5.1 Install OpenAI package
  - Run `npm install openai` in server directory
  - Verify installation in package.json
  - _Requirements: 1.1_

- [ ]* 5.2 Update TypeScript types
  - Install @types/node if not present for environment variable types
  - Verify OpenAI package includes TypeScript definitions
  - _Requirements: 1.1_

- [ ] 6. Test OpenAI integration end-to-end
  - Test successful OpenAI responses with various queries
  - Test boundary enforcement (out-of-scope questions)
  - Test fallback mechanism when OpenAI fails
  - Test conversation context across multiple messages
  - Verify error handling and logging
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 4.1, 4.2, 4.3, 4.4, 4.5, 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 6.1 Test in-scope MRECAI queries
  - Ask about insurance services and verify accurate response with contact info
  - Ask about business consulting and verify response includes /book-now link
  - Ask about pricing and verify response mentions free consultation
  - Ask about company history and verify founded 2009, 15+ years experience
  - Verify all responses include correct contact info (929-919-3574, Matthew@MRECAI.com)
  - _Requirements: 1.1, 1.2, 1.3, 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 6.2 Test boundary enforcement
  - Ask about unrelated topics (weather, sports, politics) and verify polite refusal
  - Ask about competitors and verify refusal with redirect to MRECAI services
  - Ask for personal advice and verify refusal with contact information
  - Verify refusal messages include contact info and /book-now link
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 6.3 Test conversation context
  - Send initial question about insurance, then follow-up question using "it" or "that"
  - Verify AI maintains context and understands references to previous messages
  - Test with 3-4 message conversation to verify history is working
  - _Requirements: 1.4, 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ] 6.4 Test fallback mechanism
  - Temporarily set invalid OPENAI_API_KEY and verify knowledge base fallback works
  - Verify no error messages shown to user during fallback
  - Verify response source is 'knowledge_base' in API response
  - Restore valid API key after testing
  - _Requirements: 3.3, 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 6.5 Test error scenarios
  - Test with very long message (>1000 characters) and verify handling
  - Test rapid successive messages and verify rate limiting works
  - Verify loading states display correctly during API calls
  - Verify error logging captures necessary information without user data
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 5.1, 5.2, 5.3, 5.4_

- [ ] 7. Documentation and deployment preparation
  - Update README with OpenAI setup instructions
  - Document environment variables and configuration options
  - Add monitoring and cost tracking guidelines
  - Create deployment checklist
  - _Requirements: 3.1, 3.5, 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 7.1 Create OpenAI setup documentation
  - Document how to obtain OpenAI API key
  - List all required environment variables with descriptions
  - Provide configuration examples for different models (GPT-3.5 vs GPT-4)
  - Include cost estimates and recommendations
  - _Requirements: 3.1, 3.5_

- [ ] 7.2 Document monitoring and logging
  - Explain what metrics are logged (tokens, response time, success rate)
  - Provide examples of log entries for successful and failed requests
  - Document how to track daily costs and usage
  - Include guidelines for setting up alerts for unusual activity
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ]* 7.3 Create deployment checklist
  - List pre-deployment verification steps (API key valid, tests passing)
  - Include rollback procedure (set API key to empty for instant fallback)
  - Document monitoring plan for first 48 hours after deployment
  - Add post-deployment verification steps
  - _Requirements: 3.1, 3.2, 3.3_
