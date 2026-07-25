import { useState, useEffect, lazy, Suspense } from "react";
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

// Lazy load 3D Developer Universe page for 0-latency recruiter loads
const DeveloperUniverse = lazy(() => import("./pages/DeveloperUniverse"));

function MainContent() {
  const [viewMode, setViewMode] = useState("recruiter"); // "recruiter" | "universe"
  const { isOpen, openPalette, closePalette } = useCommandPalette();

  useEffect(() => {
    initAnalytics();
  }, []);

  if (viewMode === "universe") {
    return (
      <Suspense fallback={
        <div style={{ minHeight: "100vh", backgroundColor: "#020617", color: "#38bdf8", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: "18px" }}>
          Initializing Developer Universe 3D Engine...
        </div>
      }>
        <DeveloperUniverse onExit={() => setViewMode("recruiter")} />
      </Suspense>
    );
  }

  return (
    <div style={{ color: "#f8fafc", minHeight: "100vh", position: "relative" }}>
      {/* Main Navigation Header */}
      <Navbar onOpenCommandPalette={openPalette} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onEnterDeveloperUniverse={() => setViewMode("universe")} />

        {/* GitHub Statistics Card */}
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

      {/* Interactive AI Assistant Drawer */}
      <ChatBot />

      {/* Keyboard Command Palette Dialog (Ctrl+K) */}
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
