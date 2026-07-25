import { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';

export default function Contact() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [submitted, setSubmitted] = useState(false);

  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT || "https://formspree.io/f/xpqwvzjq";

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section id="contact" aria-label="Contact Form" className="section-container">
      <SectionHeader
        title="Get In Touch"
        badge="DIRECT CONNECT"
        icon="✉️"
        accentColor="#10b981"
      />

      <div
        onMouseMove={handleMouseMove}
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.7)",
          backgroundImage: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.12), transparent 40%)`,
          border: "1px solid rgba(56, 189, 248, 0.2)",
          borderRadius: "24px",
          padding: "clamp(24px, 5vw, 48px)",
          maxWidth: "850px",
          margin: "0 auto",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(12px)"
        }}
      >
        <p style={{ color: "#94a3b8", fontSize: "16px", marginBottom: "32px", textAlign: "center" }}>
          Have a project in mind or an open opportunity? Send a direct message below!
        </p>

        {submitted ? (
          <div style={{
            textAlign: "center",
            padding: "40px 20px",
            color: "#a3e635",
            fontSize: "18px",
            fontWeight: "700"
          }}>
            🎉 Thank you! Your message has been sent successfully. Jamsheer will get back to you shortly.
          </div>
        ) : (
          <form
            action={formEndpoint}
            method="POST"
            onSubmit={() => setSubmitted(true)}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px"
            }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#cbd5e1", marginBottom: "8px" }}>
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="John"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(30, 41, 59, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "#ffffff",
                    fontSize: "15px",
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#cbd5e1", marginBottom: "8px" }}>
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Doe"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(30, 41, 59, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "#ffffff",
                    fontSize: "15px",
                    outline: "none"
                  }}
                />
              </div>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px"
            }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#cbd5e1", marginBottom: "8px" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(30, 41, 59, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "#ffffff",
                    fontSize: "15px",
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#cbd5e1", marginBottom: "8px" }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(30, 41, 59, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "#ffffff",
                    fontSize: "15px",
                    outline: "none"
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#cbd5e1", marginBottom: "8px" }}>
                Your Message *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Hi Jamsheer, I would like to discuss an opportunity..."
                style={{
                  width: "100%",
                  backgroundColor: "rgba(30, 41, 59, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  color: "#ffffff",
                  fontSize: "15px",
                  outline: "none",
                  resize: "vertical"
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#10b981",
                color: "#ffffff",
                border: "none",
                padding: "14px 32px",
                borderRadius: "9999px",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                alignSelf: "center",
                boxShadow: "0 4px 20px rgba(16, 185, 129, 0.3)",
                transition: "transform 0.2s ease"
              }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
