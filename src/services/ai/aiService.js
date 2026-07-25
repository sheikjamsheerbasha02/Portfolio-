import { MockProvider } from './MockProvider';
import { GeminiProvider } from './GeminiProvider';
import { OpenAIProvider } from './OpenAIProvider';

/**
 * AI Service Factory
 * Instantiates the appropriate provider based on environment configuration.
 */
class AIService {
  constructor() {
    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;

    if (geminiKey) {
      this.provider = new GeminiProvider(geminiKey);
    } else if (openaiKey) {
      this.provider = new OpenAIProvider(openaiKey);
    } else {
      this.provider = new MockProvider();
    }
  }

  async processQuery(query, history = []) {
    return this.provider.generateResponse(query, history);
  }
}

export const aiService = new AIService();
