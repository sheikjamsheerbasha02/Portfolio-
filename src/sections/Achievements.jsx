import { achievementsData, achievements } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';

export default function Achievements() {
  const items = achievementsData || achievements || [];

  return (
    <section id="achievements" aria-label="Honors and Achievements" className="section-container">
      <SectionHeader
        title="Honors & Achievements"
        badge="AWARDS & RECOGNITION"
        icon="🏆"
        accentColor="#f59e0b"
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
        {items.map((item, idx) => {
          const color = item.color || "#f59e0b";
          const badgeText = item.badge || item.issuer || item.date || "Honors";
          const descText = item.desc || item.description || "";

          return (
            <GlassCard key={idx}>
              <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(245, 158, 11, 0.15)",
                  border: "1px solid rgba(245, 158, 11, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  flexShrink: 0
                }}>
                  {item.icon || "🏆"}
                </div>

                <div>
                  <span style={{
                    fontSize: "12px",
                    color: color,
                    fontWeight: "600",
                    fontFamily: "var(--font-mono)",
                    display: "inline-block",
                    marginBottom: "4px"
                  }}>
                    {badgeText}
                  </span>

                  <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: "0 0 8px 0" }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0, lineHeight: "1.6" }}>
                    {descText}
                  </p>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
