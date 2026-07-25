import { AIProvider } from './AIProvider';
import { MockProvider } from './MockProvider';

export class OpenAIProvider extends AIProvider {
  constructor(apiKey) {
    super();
    this.apiKey = apiKey;
    this.fallbackProvider = new MockProvider();
  }

  async generateResponse(query, conversationHistory = []) {
    if (!this.apiKey) {
      return this.fallbackProvider.generateResponse(query, conversationHistory);
    }

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are an AI portfolio assistant for Sheik Jamsheer Basha, a Software Engineer specializing in PHP, Laravel, and React.' },
            { role: 'user', content: query }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('OpenAI API request failed');
      }

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content || "Thank you for asking!";

      return {
        text,
        action: null,
        timestamp
      };
    } catch {
      return this.fallbackProvider.generateResponse(query, conversationHistory);
    }
  }
}
