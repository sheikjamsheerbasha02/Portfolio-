/**
 * Abstract AI Provider Interface
 * Every AI provider implementation must adhere to this interface.
 */
export class AIProvider {
  /**
   * Generates a response for a user query
   * @param {string} query 
   * @param {Array} conversationHistory 
   * @returns {Promise<{ text: string, action?: string, timestamp: string }>}
   */
  // eslint-disable-next-line no-unused-vars
  async generateResponse(query, conversationHistory = []) {
    throw new Error("generateResponse method must be implemented by subclass.");
  }
}
