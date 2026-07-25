export default function SectionHeader({ title, badge, icon, accentColor = "#38bdf8" }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "40px"
    }}>
      {icon && (
        <div style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          backgroundColor: `${accentColor}18`,
          border: `1px solid ${accentColor}35`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: accentColor,
          fontSize: "20px",
          flexShrink: 0
        }}>
          {icon}
        </div>
      )}
      <div>
        <h2 style={{
          fontSize: "clamp(24px, 4vw, 32px)",
          fontWeight: "800",
          color: "#ffffff",
          margin: 0,
          letterSpacing: "-0.02em"
        }}>
          {title}
        </h2>
        {badge && (
          <span style={{
            fontSize: "13px",
            color: accentColor,
            fontWeight: "600",
            fontFamily: "var(--font-mono)",
            marginTop: "4px",
            display: "inline-block"
          }}>
            // {badge}
          </span>
        )}
      </div>
    </div>
  );
}
