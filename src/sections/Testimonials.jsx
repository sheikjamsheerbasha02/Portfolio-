import { testimonialsData } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="Endorsements and Recommendations" className="section-container">
      <SectionHeader
        title="Recommendations & Endorsements"
        badge="PEER FEEDBACK"
        icon="💬"
        accentColor="#a855f7"
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        {testimonialsData.map((item, idx) => (
          <GlassCard key={idx} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <p style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.7", fontStyle: "italic", margin: "0 0 20px 0" }}>
              "{item.quote}"
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ fontSize: "28px" }}>{item.avatar}</div>
              <div>
                <h4 style={{ margin: 0, color: "#ffffff", fontSize: "15px", fontWeight: "700" }}>
                  {item.author}
                </h4>
                <span style={{ fontSize: "12px", color: "#38bdf8", fontFamily: "var(--font-mono)" }}>
                  {item.role}
                </span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
