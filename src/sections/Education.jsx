import { educationData } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';

export default function Education() {
  return (
    <section id="education" aria-label="Education Background" className="section-container">
      <SectionHeader
        title="Education History"
        badge="ACADEMIC BACKGROUND"
        icon="🎓"
        accentColor="#a855f7"
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
        {educationData.map((edu, idx) => (
          <GlassCard key={idx} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: "600",
                backgroundColor: "rgba(168, 85, 247, 0.15)",
                color: "#a855f7",
                marginBottom: "14px"
              }}>
                {edu.status}
              </div>

              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: "0 0 8px 0" }}>
                {edu.institution}
              </h3>

              <p style={{ fontSize: "14px", color: "#38bdf8", fontWeight: "600", margin: "0 0 16px 0" }}>
                {edu.degree}
              </p>
            </div>

            <div style={{
              alignSelf: "flex-start",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "6px 14px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: "700",
              color: "#a3e635"
            }}>
              Score: {edu.score}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
