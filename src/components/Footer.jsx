import { developerInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      backgroundColor: "rgba(2, 6, 23, 0.95)",
      padding: "60px 24px 30px 24px",
      marginTop: "80px",
      position: "relative"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "40px",
        marginBottom: "40px"
      }}>
        {/* Brand Column */}
        <div>
          <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff", margin: "0 0 12px 0" }}>
            Sheik Jamsheer Basha
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6", margin: "0 0 20px 0" }}>
            Aspiring Software Developer passionate about building high-performance web solutions with PHP, Laravel, Java, and modern frontend tools.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            {developerInfo.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.name}`}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(30, 41, 59, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: "16px",
                  transition: "all 0.2s ease"
                }}
              >
                {social.name === "LinkedIn" ? "💼" : social.name === "GitHub" ? "🐙" : "▲"}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", margin: "0 0 16px 0" }}>
            Navigation
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                style={{
                  color: "#94a3b8",
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "color 0.2s ease"
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", margin: "0 0 16px 0" }}>
            Direct Contact
          </h4>
          <p style={{ color: "#94a3b8", fontSize: "14px", margin: "0 0 8px 0" }}>
            📍 Location: {developerInfo.location}
          </p>
          <p style={{ color: "#94a3b8", fontSize: "14px", margin: "0 0 16px 0" }}>
            💼 Status: <span style={{ color: "#a3e635" }}>{developerInfo.status}</span>
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              backgroundColor: "rgba(56, 189, 248, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              color: "#38bdf8",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: "600",
              textDecoration: "none"
            }}
          >
            Send a Direct Message
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "24px",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px"
      }}>
        <p style={{ color: "#64748b", fontSize: "13px", margin: 0 }}>
          © {new Date().getFullYear()} Sheik Jamsheer Basha. All rights reserved.
        </p>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          style={{
            backgroundColor: "rgba(30, 41, 59, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#94a3b8",
            padding: "8px 16px",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: "600",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          <span>Back to Top</span>
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}
