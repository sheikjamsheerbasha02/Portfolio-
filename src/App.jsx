import { useState, useEffect } from "react";
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

import Resume3DCanvas from "./components/canvas/Resume3DCanvas";
import IntroLoader from "./components/3d/IntroLoader";
import CursorFollower from "./components/common/CursorFollower";

function MainContent() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const { isOpen, openPalette, closePalette } = useCommandPalette();

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <div style={{ color: "#f8fafc", minHeight: "100vh", position: "relative" }}>
      {/* 3D WebGL Canvas Engine Backdrop */}
      <Resume3DCanvas />

      {/* Reactive Magnetic Cursor Follower */}
      <CursorFollower />

      {/* Opening Intro Loader */}
      {!loadingComplete && (
        <IntroLoader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Main Navigation Header */}
      <Navbar onOpenCommandPalette={openPalette} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />

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
