import { AIProvider } from './AIProvider';
import { MockProvider } from './MockProvider';

export class GeminiProvider extends AIProvider {
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
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `You are an AI assistant for Sheik Jamsheer Basha, a Software Engineer and PHP & Laravel Developer. Answer politely and concisely to: "${query}"` }]
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Gemini API request failed');
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Thank you for your question!";

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
