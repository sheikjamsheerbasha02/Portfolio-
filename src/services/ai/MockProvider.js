import { AIProvider } from './AIProvider';
import { chatbotFAQ } from '../../data/portfolioData';

export class MockProvider extends AIProvider {
  async generateResponse(query) {
    const cleanQuery = query.toLowerCase().trim();
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Intent & Keyword Matcher
    for (const faq of chatbotFAQ) {
      if (faq.keywords.some(keyword => cleanQuery.includes(keyword))) {
        return {
          text: faq.response,
          action: this.detectAction(cleanQuery),
          timestamp
        };
      }
    }

    return {
      text: "I'm Sheik Jamsheer Basha's AI Assistant! You can ask me about his skills, projects (like Premium Cuts or Muslims-Matches), experience, or download his resume.",
      action: null,
      timestamp
    };
  }

  detectAction(query) {
    if (query.includes("project") || query.includes("work")) return "projects";
    if (query.includes("skill") || query.includes("tech") || query.includes("stack")) return "tech-stack";
    if (query.includes("experience") || query.includes("job") || query.includes("intern")) return "experience";
    if (query.includes("contact") || query.includes("hire") || query.includes("email")) return "contact";
    if (query.includes("education") || query.includes("college")) return "education";
    if (query.includes("award") || query.includes("hackathon")) return "achievements";
    return null;
  }
}
