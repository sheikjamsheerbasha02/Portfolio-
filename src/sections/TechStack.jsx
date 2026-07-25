import { techStackGrouped } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';

export default function TechStack() {
  return (
    <section id="tech-stack" aria-label="Technical Arsenal & Stack" className="section-container">
      <SectionHeader
        title="Technical Arsenal & Stack"
        badge="GROUPED TECHNOLOGIES"
        icon="💻"
        accentColor="#38bdf8"
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
        {techStackGrouped.map((group, groupIdx) => (
          <div key={groupIdx}>
            {/* Category Subheading */}
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff", margin: "0 0 4px 0" }}>
                {group.category}
              </h3>
              <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0 }}>
                {group.description}
              </p>
            </div>

            {/* Grid of Tech Cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px"
            }}>
              {group.items.map((item, itemIdx) => (
                <GlassCard
                  key={itemIdx}
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "130px"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                      <span style={{ fontSize: "24px" }}>{item.icon}</span>
                      <span style={{
                        fontSize: "11px",
                        fontWeight: "600",
                        fontFamily: "var(--font-mono)",
                        color: item.level === 'Advanced' ? '#a3e635' : '#38bdf8',
                        backgroundColor: item.level === 'Advanced' ? 'rgba(163, 230, 53, 0.1)' : 'rgba(56, 189, 248, 0.1)',
                        padding: "2px 8px",
                        borderRadius: "6px"
                      }}>
                        {item.level}
                      </span>
                    </div>

                    <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", margin: "0 0 6px 0" }}>
                      {item.name}
                    </h4>
                  </div>

                  <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0, lineHeight: "1.5" }}>
                    {item.desc}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
