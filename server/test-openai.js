require('dotenv').config();
const OpenAI = require('openai');

async function testOpenAI() {
  console.log('Testing OpenAI configuration...\n');
  
  // Check if API key exists
  if (!process.env.OPENAI_API_KEY) {
    console.error('✗ OPENAI_API_KEY not found in .env file');
    process.exit(1);
  }
  
  console.log('✓ API Key found:', process.env.OPENAI_API_KEY.substring(0, 20) + '...');
  console.log('✓ Model:', process.env.OPENAI_MODEL || 'gpt-3.5-turbo');
  console.log('✓ Max Tokens:', process.env.OPENAI_MAX_TOKENS || '500');
  console.log('✓ Temperature:', process.env.OPENAI_TEMPERATURE || '0.7');
  console.log('✓ Timeout:', process.env.OPENAI_TIMEOUT_MS || '10000', 'ms\n');
  
  // Initialize OpenAI client
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: parseInt(process.env.OPENAI_TIMEOUT_MS || '10000'),
  });
  
  console.log('Sending test message to OpenAI...\n');
  
  try {
    const startTime = Date.now();
    
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Say "Hello from MRECAI!" in one sentence.' }
      ],
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS || '500'),
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.7'),
    });
    
    const responseTime = Date.now() - startTime;
    
    console.log('✓ OpenAI API Response received!\n');
    console.log('Response:', completion.choices[0].message.content);
    console.log('\nMetadata:');
    console.log('- Model:', completion.model);
    console.log('- Tokens used:', completion.usage.total_tokens);
    console.log('- Response time:', responseTime, 'ms');
    console.log('\n✓ OpenAI is working correctly for AI Chat!');
    
  } catch (error) {
    console.error('\n✗ OpenAI API Error:', error.message);
    
    if (error.status === 401) {
      console.error('\nThe API key is invalid or expired.');
      console.error('Please check your OPENAI_API_KEY in server/.env');
    } else if (error.status === 429) {
      console.error('\nRate limit exceeded or quota reached.');
      console.error('Check your OpenAI account usage and billing.');
    } else if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
      console.error('\nRequest timed out. Check your internet connection.');
    } else {
      console.error('\nError details:', error);
    }
    
    process.exit(1);
  }
}

testOpenAI();
