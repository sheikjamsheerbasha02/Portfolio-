import { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import { developerInfo } from '../data/portfolioData';
import { useToast } from '../hooks/useToast';

export default function Contact() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();

  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT || "https://formspree.io/f/xpqwvzjq";

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sheikjamsheerbasha02@gmail.com");
    addToast("Copied email sheikjamsheerbasha02@gmail.com to clipboard!", "success");
  };

  const handleDownloadResume = () => {
    addToast("Initiating software engineering resume download...", "info");
  };

  return (
    <section id="contact" aria-label="Futuristic Communication Terminal" className="section-container">
      <SectionHeader
        title="Futuristic Communication Terminal"
        badge="DIRECT CONNECT & TERMINAL"
        icon="📡"
        accentColor="#10b981"
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "32px",
        alignItems: "start"
      }}>
        {/* Left Column: Glowing 3D Terminal Controls */}
        <div style={{
          backgroundColor: "rgba(15, 23, 42, 0.75)",
          border: "1px solid rgba(56, 189, 248, 0.25)",
          borderRadius: "24px",
          padding: "32px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(12px)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#10b981", boxShadow: "0 0 10px #10b981" }}></div>
            <h3 style={{ margin: 0, color: "#ffffff", fontSize: "18px", fontWeight: "700", fontFamily: "var(--font-mono)" }}>
              // Terminal Actions & Channels
            </h3>
          </div>

          <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6", marginBottom: "28px" }}>
            Connect directly through verified channels, download technical resume credentials, or initiate direct messaging.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {/* Download Resume */}
            <button
              onClick={handleDownloadResume}
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.12)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "#38bdf8",
                padding: "14px 20px",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span>📄</span>
                <span>Download Official Resume</span>
              </span>
              <span>↓</span>
            </button>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sheik-jamsheer-basha-t-59a3171ab/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "rgba(10, 102, 194, 0.15)",
                border: "1px solid rgba(10, 102, 194, 0.4)",
                color: "#60a5fa",
                padding: "14px 20px",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "700",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span>💼</span>
                <span>LinkedIn Profile</span>
              </span>
              <span>→</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sheikjamsheerbasha02"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                padding: "14px 20px",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "700",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span>🐙</span>
                <span>GitHub Repositories</span>
              </span>
              <span>→</span>
            </a>

            {/* Copy Email */}
            <button
              onClick={handleCopyEmail}
              style={{
                backgroundColor: "rgba(163, 230, 53, 0.1)",
                border: "1px solid rgba(163, 230, 53, 0.3)",
                color: "#a3e635",
                padding: "14px 20px",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span>✉️</span>
                <span>Copy Email Address</span>
              </span>
              <span>📋</span>
            </button>

            {/* WhatsApp / Direct Chat */}
            <a
              href="https://wa.me/?text=Hi%20Jamsheer,%20I%20saw%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "rgba(34, 197, 94, 0.12)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                color: "#4ade80",
                padding: "14px 20px",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "700",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span>💬</span>
                <span>WhatsApp Direct Messaging</span>
              </span>
              <span>⚡</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Light Beam Contact Form */}
        <div
          onMouseMove={handleMouseMove}
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.75)",
            backgroundImage: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.15), transparent 40%)`,
            border: "1px solid rgba(56, 189, 248, 0.2)",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(12px)"
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff", margin: "0 0 8px 0" }}>
            Send a Direct Message
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "24px" }}>
            Location: {developerInfo.location} • Status: <span style={{ color: "#a3e635" }}>{developerInfo.status}</span>
          </p>

          {submitted ? (
            <div style={{
              textAlign: "center",
              padding: "40px 20px",
              color: "#a3e635",
              fontSize: "16px",
              fontWeight: "700"
            }}>
              🎉 Thank you! Your message has been transmitted. Jamsheer will get back to you shortly.
            </div>
          ) : (
            <form
              action={formEndpoint}
              method="POST"
              onSubmit={() => setSubmitted(true)}
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#cbd5e1", marginBottom: "6px" }}>First Name *</label>
                  <input type="text" name="firstName" required placeholder="John" style={{ width: "100%", backgroundColor: "rgba(30, 41, 59, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", padding: "10px 14px", color: "#ffffff", fontSize: "14px", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#cbd5e1", marginBottom: "6px" }}>Last Name *</label>
                  <input type="text" name="lastName" required placeholder="Doe" style={{ width: "100%", backgroundColor: "rgba(30, 41, 59, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", padding: "10px 14px", color: "#ffffff", fontSize: "14px", outline: "none" }} />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#cbd5e1", marginBottom: "6px" }}>Email Address *</label>
                <input type="email" name="email" required placeholder="john@example.com" style={{ width: "100%", backgroundColor: "rgba(30, 41, 59, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", padding: "10px 14px", color: "#ffffff", fontSize: "14px", outline: "none" }} />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#cbd5e1", marginBottom: "6px" }}>Message *</label>
                <textarea name="message" required rows={4} placeholder="Hi Jamsheer, I'd like to discuss an opportunity..." style={{ width: "100%", backgroundColor: "rgba(30, 41, 59, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", padding: "12px 14px", color: "#ffffff", fontSize: "14px", outline: "none", resize: "vertical" }}></textarea>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#10b981",
                  color: "#ffffff",
                  border: "none",
                  padding: "14px 28px",
                  borderRadius: "9999px",
                  fontSize: "15px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(16, 185, 129, 0.3)"
                }}
              >
                Transmit Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
