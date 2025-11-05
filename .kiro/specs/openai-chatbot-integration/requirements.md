# Requirements Document

## Introduction

This feature integrates OpenAI's GPT model into the existing MRECAI chatbot to provide intelligent, context-aware responses while maintaining strict boundaries to only discuss MRECAI services, offerings, and related business topics. The integration will replace the current hardcoded knowledge base with AI-powered responses that are more natural and flexible, while ensuring the chatbot never discusses topics outside the company's scope.

## Glossary

- **Chatbot System**: The AI-powered chat interface on the MRECAI website that assists visitors
- **OpenAI Service**: The external API service that provides GPT language model capabilities
- **System Prompt**: Instructions given to the AI model that define its behavior and boundaries
- **Knowledge Context**: Information about MRECAI services, offerings, and policies provided to the AI
- **Fallback Response**: A predefined message shown when the AI cannot provide an appropriate answer
- **Conversation History**: The record of previous messages in a chat session used for context

## Requirements

### Requirement 1

**User Story:** As a website visitor, I want to receive intelligent, natural responses from the chatbot about MRECAI services, so that I can get accurate information in a conversational manner.

#### Acceptance Criteria

1. WHEN a user sends a message to the chatbot, THE Chatbot System SHALL send the message to the OpenAI Service with appropriate context
2. WHEN the OpenAI Service returns a response, THE Chatbot System SHALL display the response to the user within 3 seconds
3. WHEN the user asks about MRECAI services, THE Chatbot System SHALL provide accurate information based on the company's offerings
4. WHEN the user asks follow-up questions, THE Chatbot System SHALL maintain conversation context using Conversation History
5. WHILE processing a request, THE Chatbot System SHALL display a loading indicator to the user

### Requirement 2

**User Story:** As a business owner, I want the chatbot to only answer questions within the scope of MRECAI services, so that the AI stays focused and doesn't provide irrelevant or inappropriate information.

#### Acceptance Criteria

1. THE Chatbot System SHALL include a System Prompt that restricts responses to MRECAI-related topics only
2. WHEN a user asks about topics unrelated to MRECAI, THE Chatbot System SHALL politely decline and redirect to relevant services
3. THE System Prompt SHALL include comprehensive information about all MRECAI services, contact details, and policies
4. THE Chatbot System SHALL refuse to answer questions about competitors, politics, personal advice, or any non-business topics
5. WHEN the AI attempts to discuss out-of-scope topics, THE Chatbot System SHALL provide a Fallback Response directing users to contact the team

### Requirement 3

**User Story:** As a developer, I want the OpenAI integration to be secure and configurable, so that API keys are protected and the system can be easily maintained.

#### Acceptance Criteria

1. THE Chatbot System SHALL store the OpenAI API key in environment variables, not in source code
2. THE Chatbot System SHALL validate that the OpenAI API key exists before attempting API calls
3. WHEN the OpenAI API key is missing or invalid, THE Chatbot System SHALL fall back to the existing knowledge base responses
4. THE Chatbot System SHALL log API errors without exposing sensitive information to users
5. THE Chatbot System SHALL allow configuration of the AI model version through environment variables

### Requirement 4

**User Story:** As a website visitor, I want the chatbot to handle errors gracefully, so that I always receive a helpful response even when technical issues occur.

#### Acceptance Criteria

1. WHEN the OpenAI Service is unavailable, THE Chatbot System SHALL display a Fallback Response with contact information
2. WHEN the OpenAI Service returns an error, THE Chatbot System SHALL log the error and show a user-friendly message
3. WHEN the API request times out after 10 seconds, THE Chatbot System SHALL display a Fallback Response
4. THE Chatbot System SHALL continue functioning with the knowledge base if OpenAI integration fails
5. WHEN rate limits are exceeded, THE Chatbot System SHALL inform the user and provide alternative contact methods

### Requirement 5

**User Story:** As a business owner, I want to monitor chatbot usage and costs, so that I can track the effectiveness and expenses of the OpenAI integration.

#### Acceptance Criteria

1. THE Chatbot System SHALL log each OpenAI API request with timestamp and token usage
2. THE Chatbot System SHALL track the number of successful and failed API calls
3. THE Chatbot System SHALL include the response source (OpenAI or knowledge base) in API responses
4. WHEN logging API usage, THE Chatbot System SHALL not log user messages to protect privacy
5. THE Chatbot System SHALL provide metrics on average response time for OpenAI requests

### Requirement 6

**User Story:** As a website visitor, I want the chatbot to provide consistent information across all channels, so that I receive accurate details about services, pricing, and contact information.

#### Acceptance Criteria

1. THE System Prompt SHALL include all current MRECAI service offerings with accurate descriptions
2. THE System Prompt SHALL include correct contact information (phone: 929-919-3574, email: Matthew@MRECAI.com)
3. THE System Prompt SHALL include accurate website routes for booking (/book-now), forms (/intake-forms), and services (/services)
4. THE Chatbot System SHALL format responses with proper links that users can click
5. WHEN providing contact information or routes, THE Chatbot System SHALL use the exact formats specified in the System Prompt

### Requirement 7

**User Story:** As a developer, I want to maintain conversation context efficiently, so that the chatbot provides coherent multi-turn conversations without excessive API costs.

#### Acceptance Criteria

1. THE Chatbot System SHALL send the last 5 messages as Conversation History to the OpenAI Service
2. THE Chatbot System SHALL include both user and assistant messages in the Conversation History
3. WHEN Conversation History exceeds 5 messages, THE Chatbot System SHALL remove the oldest messages
4. THE Chatbot System SHALL format Conversation History according to OpenAI's message format requirements
5. THE Chatbot System SHALL include the System Prompt in every API request to maintain behavioral boundaries
