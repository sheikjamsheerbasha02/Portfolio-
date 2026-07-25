export default function GlassCard({ children, style = {}, className = "", ...props }) {
  return (
    <div
      className={`glass-panel ${className}`}
      style={{
        padding: "32px",
        position: "relative",
        overflow: "hidden",
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
}
