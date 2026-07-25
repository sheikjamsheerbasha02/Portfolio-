import { chatbotFAQ } from '../data/portfolioData';

/**
 * AI-Ready Chat Engine Service
 * Provides intent matching with knowledge-base lookup and extensible external API integration points.
 */
export const processUserQuery = async (query) => {
  const cleanQuery = query.toLowerCase().trim();

  // 1. Keyword / Intent Matching
  for (const faq of chatbotFAQ) {
    if (faq.keywords.some(keyword => cleanQuery.includes(keyword))) {
      return {
        text: faq.response,
        action: detectSectionJump(cleanQuery),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
    }
  }

  // 2. Default Fallback
  return {
    text: "I'm still learning! You can ask me about Jamsheer's skills, projects, experience, hackathon wins, or how to contact him.",
    action: null,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
};

/**
 * Helper to suggest navigating to specific section anchors
 */
function detectSectionJump(query) {
  if (query.includes("project") || query.includes("work")) return "projects";
  if (query.includes("skill") || query.includes("tech")) return "skills";
  if (query.includes("experience") || query.includes("job") || query.includes("intern")) return "experience";
  if (query.includes("contact") || query.includes("hire") || query.includes("email")) return "contact";
  if (query.includes("education") || query.includes("college")) return "education";
  if (query.includes("award") || query.includes("hackathon")) return "achievements";
  return null;
}
