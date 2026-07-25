# Sheik Jamsheer Basha - Software Engineer Portfolio

> **Production-Grade Developer Showcase** (Google / Stripe / OpenAI Tier Engineering Portfolio) built with **React 19**, **Vite 7**, and **Clean Architecture**.

---

## 🌟 Architectural Features & Highlights

- **Single Source of Truth**: Centralized portfolio data repository ([`src/data/portfolioData.js`](src/data/portfolioData.js)).
- **AI Provider Strategy Pattern**: Abstract AI service ([`src/services/ai/AIProvider.js`](src/services/ai/AIProvider.js)) supporting Mock Knowledge Base, Google Gemini API, and OpenAI Chat API endpoints.
- **Command Palette (`Ctrl + K` / `Cmd + K`)**: Floating interactive search dialog for instant keyboard navigation.
- **Project Case Studies & Architecture Modals**: Deep-dive breakdowns (Problem, Solution, Architecture Diagram, Database & API Design, Scaling) for:
  1. **Premium Cuts**: Halal Meat Ordering Platform
  2. **Nikah.com / Muslims-Matches**: Halal Matrimonial Platform
  3. **AI Developer Assistant**: AI-powered coding productivity tool
  4. **Student Portal**: Java Enterprise CRUD System
  5. **Developer Portfolio**: React 19 + Vite + Glassmorphic UI
- **Grouped Tech Stack Cards**: Interactive technology cards categorized into Backend Engineering, Frontend & UI, and Tools & Environment.
- **GitHub Recruiter Integration**: GitHub stats widget featuring public repository counts, contributions, and recent commit tracking.
- **Global Toast Notification Context**: System-wide toast popup context for action feedback.
- **SEO & Structured Data**: JSON-LD `Person` & `WebSite` schemas, `robots.txt`, `sitemap.xml`, Open Graph, Twitter Cards.

---

## 📁 Project Folder Structure

```
Portfolio--main/
├── index.html                  # Recruiter-optimized HTML entry with JSON-LD schemas
├── package.json                # React 19 & Vite 7 scripts
├── public/
│   ├── robots.txt              # Search engine crawler instructions
│   └── sitemap.xml             # XML sitemap for SEO indexing
├── src/
│   ├── main.jsx                # Application root mount
│   ├── App.jsx                 # Master application assembly
│   ├── index.css               # Global reset & CSS design system import
│   ├── context/
│   │   └── ToastContext.jsx    # Global Toast notification context & renderer
│   ├── data/
│   │   └── portfolioData.js    # Centralized Single Source of Truth
│   ├── hooks/
│   │   ├── useActiveSection.js # IntersectionObserver navigation hook
│   │   └── useCommandPalette.js# Keyboard shortcut handler (Ctrl+K)
│   ├── services/
│   │   ├── analytics.js        # Optional GA4, Plausible, & Clarity service
│   │   ├── githubService.js    # Live GitHub API integration with fallback
│   │   └── ai/
│   │       ├── AIProvider.js   # Abstract AI Provider Interface
│   │       ├── MockProvider.js # Local knowledge base fallback
│   │       ├── GeminiProvider.js# Google Gemini API Provider
│   │       ├── OpenAIProvider.js# OpenAI API Provider
│   │       └── aiService.js    # Provider factory
│   ├── styles/
│   │   └── design-system.css   # Custom CSS properties, glassmorphism, glows
│   ├── components/
│   │   ├── CommandPalette.jsx  # Ctrl+K search & action modal
│   │   ├── ProjectModal.jsx    # Case Study & Architecture modal
│   │   ├── GitHubStats.jsx     # Recruiter GitHub statistics card
│   │   ├── Navbar.jsx          # Glass header with active section indicator
│   │   ├── CodeBackground.jsx  # Dynamic grid & particle backdrop
│   │   ├── ChatBot.jsx         # AI assistant drawer
│   │   └── Footer.jsx          # Executive site footer
│   └── sections/
│       ├── Hero.jsx            # Typewriter headline, status badge, recruiter metrics
│       ├── About.jsx           # Summary, career goals, engineering pillars
│       ├── TechStack.jsx       # Grouped tech cards (Backend, Frontend, Tools)
│       ├── Skills.jsx          # Preserved wrapper pointing to TechStack
│       ├── Projects.jsx        # Filterable projects grid & case study trigger
│       ├── Experience.jsx      # Interactive timeline with impact metrics
│       ├── Achievements.jsx    # Hackathon awards & Kalam Youth Award
│       ├── Education.jsx       # Academic history & score badges
│       ├── Testimonials.jsx    # Peer & recruiter recommendations
│       ├── Blog.jsx            # Technical articles & engineering writing
│       └── Contact.jsx         # Formspree contact form with cursor light beam
```

---

## ⚙️ Environment Configuration

Create a `.env` file in the root directory to configure optional API keys and endpoints:

```env
# Optional: Google Gemini API Key for Chatbot
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Optional: OpenAI API Key for Chatbot
VITE_OPENAI_API_KEY=your_openai_api_key_here

# GitHub Username for Live Activity Stats
VITE_GITHUB_USERNAME=sheikjamsheerbasha02

# Optional Analytics IDs
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_PLAUSIBLE_DOMAIN=sheikjamsheerbasha.dev
VITE_CLARITY_PROJECT_ID=xxxxxxxxxx
```

---

## 🚀 Local Setup & Build Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Execute ESLint Check**:
   ```bash
   npm run lint
   ```

4. **Build Production Bundle**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment Guide

### Vercel
1. Connect repository to Vercel.
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.

### Cloudflare Pages
1. Build Command: `npm run build`.
2. Build Output Directory: `dist`.

### Netlify
1. Publish Directory: `dist`.
2. Build Command: `npm run build`.
