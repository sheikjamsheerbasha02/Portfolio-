import { experienceData } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';

export default function Experience() {
  const experiences = experienceData || [];

  return (
    <section id="experience" aria-label="Work Experience" className="section-container">
      <SectionHeader
        title="Professional Experience"
        badge="TIMELINE & METRICS"
        icon="💼"
        accentColor="#38bdf8"
      />

      <div style={{
        position: "relative",
        borderLeft: "2px solid rgba(56, 189, 248, 0.2)",
        paddingLeft: "32px",
        marginLeft: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "40px"
      }}>
        {experiences.map((exp, idx) => {
          const listItems = exp.highlights || exp.achievements || [];

          return (
            <div key={idx} style={{ position: "relative" }}>
              {/* Timeline Dot */}
              <div style={{
                position: "absolute",
                left: "-39px",
                top: "4px",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: idx === 0 ? "#38bdf8" : "#64748b",
                boxShadow: idx === 0 ? "0 0 12px #38bdf8" : "none",
                border: "2px solid #020617"
              }}></div>

              {/* Content Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff", margin: 0 }}>
                  {exp.company}
                </h3>
                <span style={{ fontSize: "12px", color: "#a3e635", fontWeight: "600", fontFamily: "var(--font-mono)", backgroundColor: "rgba(163, 230, 53, 0.1)", padding: "4px 10px", borderRadius: "12px" }}>
                  {exp.location} • {exp.period}
                </span>
              </div>

              <h4 style={{ fontSize: "16px", color: "#38bdf8", fontWeight: "600", margin: "0 0 16px 0" }}>
                {exp.role}
              </h4>

              {/* Achievements / Highlights List */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {listItems.map((item, itemIdx) => (
                  <li key={itemIdx} style={{ display: "flex", gap: "12px", color: "#94a3b8", fontSize: "15px", lineHeight: "1.6" }}>
                    <span style={{ color: "#38bdf8", fontWeight: "bold" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
