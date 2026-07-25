import { useState, useEffect, useMemo } from 'react';
import { developerInfo } from '../data/portfolioData';
import { useToast } from '../hooks/useToast';

export default function Hero() {
  const { addToast } = useToast();
  const titles = useMemo(() => [
    "PHP & Laravel Developer",
    "Full Stack Software Engineer",
    "Java & Systems Architect"
  ], []);

  const [titleIdx, setTitleIdx] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIdx];
    let timeout;

    if (!isDeleting && subText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && subText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIdx((prev) => (prev + 1) % titles.length);
      }, 300);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setSubText(
          isDeleting
            ? currentTitle.substring(0, subText.length - 1)
            : currentTitle.substring(0, subText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [subText, isDeleting, titleIdx, titles]);

  const handleDownloadResume = (e) => {
    e.preventDefault();
    addToast('Initiating software engineering resume download...', 'info');
  };

  return (
    <section id="home" aria-label="Developer Introduction" style={{ position: "relative", overflow: "hidden" }}>
      <div className="section-container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "calc(88vh - 68px)",
        gap: "48px",
        flexWrap: "wrap-reverse"
      }}>
        {/* Left Column */}
        <div style={{ flex: "1 1 520px", maxWidth: "680px" }}>
          {/* Live Status Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "rgba(30, 41, 59, 0.7)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            padding: "8px 18px",
            borderRadius: "9999px",
            color: "#38bdf8",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "28px",
            boxShadow: "0 0 20px rgba(56, 189, 248, 0.15)"
          }}>
            <span style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#a3e635",
              borderRadius: "50%",
              boxShadow: "0 0 10px #a3e635"
            }}></span>
            {developerInfo.status}
          </div>

          {/* Name */}
          <h1 style={{
            fontSize: "clamp(38px, 6.5vw, 68px)",
            fontWeight: "800",
            color: "#ffffff",
            lineHeight: "1.1",
            margin: "0 0 12px 0",
            letterSpacing: "-0.03em"
          }}>
            Sheik Jamsheer <span className="gradient-text">Basha</span>
          </h1>

          {/* Animated Typewriter Sub-headline */}
          <h2 style={{
            fontSize: "clamp(18px, 3vw, 26px)",
            color: "#38bdf8",
            fontWeight: "700",
            fontFamily: "var(--font-mono)",
            margin: "0 0 24px 0",
            minHeight: "40px"
          }}>
            {subText}<span className="animate-pulse">|</span>
          </h2>

          <p style={{
            fontSize: "17px",
            color: "#94a3b8",
            lineHeight: "1.7",
            marginBottom: "36px",
            maxWidth: "580px"
          }}>
            {developerInfo.bio}
          </p>

          {/* Recruiter Metrics Strip */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "16px",
            marginBottom: "40px",
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "16px"
          }}>
            <div>
              <span style={{ fontSize: "22px", fontWeight: "800", color: "#38bdf8", display: "block" }}>{developerInfo.yearsExperience}</span>
              <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>Years Experience</span>
            </div>
            <div>
              <span style={{ fontSize: "22px", fontWeight: "800", color: "#a3e635", display: "block" }}>{developerInfo.projectsCount}</span>
              <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>Projects Built</span>
            </div>
            <div>
              <span style={{ fontSize: "22px", fontWeight: "800", color: "#f59e0b", display: "block" }}>{developerInfo.openSourceContributions}</span>
              <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>Contributions</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                backgroundColor: "#ffffff",
                color: "#020617",
                padding: "14px 28px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "700",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
                transition: "transform 0.2s ease"
              }}
            >
              <span>Get In Touch</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>

            <a
              href="#"
              onClick={handleDownloadResume}
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.1)",
                color: "#38bdf8",
                padding: "14px 28px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                transition: "all 0.2s ease"
              }}
            >
              <span>Download Resume</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column Avatar */}
        <div style={{ flex: "1 1 320px", display: "flex", justifyContent: "center" }}>
          <div style={{
            width: "clamp(280px, 80vw, 360px)",
            height: "clamp(340px, 90vw, 420px)",
            backgroundColor: "#0f172a",
            borderRadius: "24px",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(56, 189, 248, 0.2)"
          }}>
            <img
              src={developerInfo.avatar}
              alt="Sheik Jamsheer Basha"
              loading="eager"
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(80%) contrast(1.1)",
                transition: "filter 0.5s ease, transform 0.5s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%) contrast(1)";
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(80%) contrast(1.1)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
