import { useEffect } from "react";
import { ToastProvider } from "./context/ToastContext";
import { initAnalytics } from "./services/analytics";
import { useCommandPalette } from "./hooks/useCommandPalette";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import GitHubStats from "./components/GitHubStats";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import CommandPalette from "./components/CommandPalette";
import CodeBackground from "./components/CodeBackground";

function MainContent() {
  const { isOpen, openPalette, closePalette } = useCommandPalette();

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <div style={{ color: "#f8fafc", minHeight: "100vh", position: "relative" }}>
      {/* Dynamic Background Effect */}
      <CodeBackground />

      {/* Main Navigation Header */}
      <Navbar onOpenCommandPalette={openPalette} />

      {/* Semantic Content Container */}
      <main id="main-content">
        <Hero />
        
        {/* Recruiter GitHub Metrics Card */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <GitHubStats />
        </div>

        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      {/* Interactive Floating AI Assistant */}
      <ChatBot />

      {/* Keyboard Command Palette Dialog */}
      <CommandPalette isOpen={isOpen} onClose={closePalette} />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <MainContent />
    </ToastProvider>
  );
}
