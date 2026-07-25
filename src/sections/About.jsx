import { developerInfo } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';

export default function About() {
  const highlights = [
    { title: "Clean Code Architecture", desc: "Focus on modular design patterns, clean OOP principles, and readable logic.", icon: "⚡" },
    { title: "Backend Competency", desc: "Solid foundation in PHP, Laravel, Java, MySQL, and RESTful web service design.", icon: "🛠️" },
    { title: "Responsive Web UX", desc: "Passionate about crafting fast, mobile-friendly interfaces with React & CSS.", icon: "📱" }
  ];

  return (
    <section id="about" aria-label="About Me" className="section-container">
      <SectionHeader
        title="About Me & Career Objective"
        badge="BACKGROUND & OBJECTIVE"
        icon="👤"
        accentColor="#a3e635"
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        {/* Primary Bio Card */}
        <GlassCard style={{ gridColumn: "1 / -1" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff", margin: "0 0 16px 0" }}>
            Professional Summary
          </h3>
          <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.7", margin: "0 0 20px 0" }}>
            {developerInfo.bio}
          </p>
          <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#38bdf8", margin: "0 0 8px 0" }}>
            Career Objective
          </h4>
          <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
            {developerInfo.objective}
          </p>
        </GlassCard>

        {/* Highlight Cards Grid */}
        {highlights.map((item, idx) => (
          <GlassCard key={idx} style={{ padding: "24px" }}>
            <div style={{ fontSize: "28px", marginBottom: "12px" }}>{item.icon}</div>
            <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#ffffff", margin: "0 0 8px 0" }}>
              {item.title}
            </h4>
            <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0, lineHeight: "1.6" }}>
              {item.desc}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
