import { useState } from 'react';
import { developerInfo, navLinks } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar({ onOpenCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = navLinks.map(link => link.id);
  const activeSection = useActiveSection(sectionIds);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          color: #94a3b8;
          font-weight: 500;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s ease;
          padding: 6px 10px;
          border-radius: 8px;
        }

        .nav-link:hover, .nav-link.active {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.08);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10px;
          right: 10px;
          height: 2px;
          background-color: #38bdf8;
          border-radius: 2px;
          box-shadow: 0 0 8px #38bdf8;
        }

        @media (max-width: 1024px) {
          .desktop-links { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>

      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(2, 6, 23, 0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          {/* Brand Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "800",
              color: "#ffffff",
              fontSize: "16px",
              boxShadow: "0 0 15px rgba(56, 189, 248, 0.4)"
            }}>
              SJ
            </div>
            <div>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#ffffff", display: "block", lineHeight: "1.2" }}>
                Sheik Jamsheer
              </span>
              <span style={{ fontSize: "11px", color: "#a3e635", fontWeight: "600", fontFamily: "var(--font-mono)", display: "block" }}>
                📍 {developerInfo.location.split('/')[0]}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-links" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Command Palette Button & CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={onOpenCommandPalette}
              aria-label="Search site commands"
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.6)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
                color: "#94a3b8",
                padding: "6px 12px",
                borderRadius: "8px",
                fontSize: "12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span>🔍 Search</span>
              <kbd style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#38bdf8",
                padding: "2px 6px",
                borderRadius: "4px",
                fontSize: "10px",
                fontFamily: "var(--font-mono)"
              }}>Ctrl+K</kbd>
            </button>

            <a
              href="#contact"
              style={{
                backgroundColor: "#ffffff",
                color: "#020617",
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: "700",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <span>Let's Chat</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              className="mobile-hamburger"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              style={{
                display: "none",
                background: "rgba(30, 41, 59, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                padding: "8px",
                color: "#ffffff",
                cursor: "pointer"
              }}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav style={{
            background: "#0f172a",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMobileMenu}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                style={{ fontSize: "15px", padding: "8px 12px" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <div style={{ height: "68px" }}></div>
    </>
  );
}
