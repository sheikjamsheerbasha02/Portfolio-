import { achievementsData } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';

export default function Achievements() {
  return (
    <section id="achievements" aria-label="Honors and Achievements" className="section-container">
      <SectionHeader
        title="Honors & Achievements"
        badge="AWARDS & RECOGNITION"
        icon="🏆"
        accentColor="#f59e0b"
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
        {achievementsData.map((item, idx) => (
          <GlassCard key={idx}>
            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                backgroundColor: `${item.color}18`,
                border: `1px solid ${item.color}35`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                flexShrink: 0
              }}>
                {item.icon}
              </div>

              <div>
                <span style={{
                  fontSize: "12px",
                  color: item.color,
                  fontWeight: "600",
                  fontFamily: "var(--font-mono)",
                  display: "inline-block",
                  marginBottom: "4px"
                }}>
                  {item.badge}
                </span>

                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: "0 0 8px 0" }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0, lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
