export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const summaryText = project.shortDesc || project.summary || '';
  const arch = typeof project.architecture === 'object' && project.architecture !== null
    ? project.architecture
    : { solution: project.architecture || '' };

  const problemText = project.problem || arch.problem || 'Standard manual workflow latency.';
  const solutionText = project.solution || arch.solution || 'Automated high-performance web platform.';
  const scaleText = project.estimatedScale || project.scale || arch.scale || 'Architected for enterprise load.';
  const githubUrl = project.github || project.githubUrl;
  const liveDemoUrl = project.liveDemo || project.liveDemoUrl;

  return (
    <div
      role="dialog"
      aria-label={`${project.title} Case Study`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(2, 6, 23, 0.85)',
        backdropFilter: 'blur(16px)',
        zIndex: 3000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'clamp(320px, 95vw, 800px)',
          maxHeight: '90vh',
          backgroundColor: '#0f172a',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '24px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8)',
          overflowY: 'auto',
          padding: '32px',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(30, 41, 59, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#94a3b8',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          ✕
        </button>

        {/* Badge & Title */}
        <div style={{
          display: 'inline-block',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '600',
          backgroundColor: 'rgba(163, 230, 53, 0.15)',
          color: '#a3e635',
          marginBottom: '12px'
        }}>
          {project.badge} • {project.category}
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#ffffff', margin: '0 0 16px 0' }}>
          {project.title}
        </h2>

        {/* Overview */}
        <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
          {summaryText}
        </p>

        {/* Problem & Solution Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '24px'
        }}>
          <div style={{
            backgroundColor: 'rgba(30, 41, 59, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '20px',
            borderRadius: '16px'
          }}>
            <h4 style={{ color: '#ef4444', fontSize: '15px', fontWeight: '700', margin: '0 0 8px 0' }}>
              🎯 Business Problem
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
              {problemText}
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(30, 41, 59, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '20px',
            borderRadius: '16px'
          }}>
            <h4 style={{ color: '#a3e635', fontSize: '15px', fontWeight: '700', margin: '0 0 8px 0' }}>
              💡 Technical Solution
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
              {solutionText}
            </p>
          </div>
        </div>

        {/* Architecture Breakdown */}
        <div style={{
          backgroundColor: 'rgba(2, 6, 23, 0.6)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          padding: '24px',
          borderRadius: '16px',
          marginBottom: '24px'
        }}>
          <h4 style={{ color: '#38bdf8', fontSize: '16px', fontWeight: '700', margin: '0 0 12px 0', fontFamily: 'var(--font-mono)' }}>
            🏗️ System Architecture & Specs
          </h4>
          <div style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7' }}>
            {arch.backend && <div><strong>Backend:</strong> {arch.backend}</div>}
            {arch.frontend && <div><strong>Frontend:</strong> {arch.frontend}</div>}
            {arch.keyFeatures && (
              <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                {arch.keyFeatures.map((kf, idx) => <li key={idx}>{kf}</li>)}
              </ul>
            )}
          </div>
        </div>

        {/* Challenges & Scaling */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '28px' }}>
          <div>
            <span style={{ fontSize: '12px', color: '#a855f7', fontWeight: '700', fontFamily: 'var(--font-mono)' }}>ESTIMATED SCALE</span>
            <p style={{ color: '#94a3b8', fontSize: '14px', margin: '4px 0 0 0', lineHeight: '1.6' }}>{scaleText}</p>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ffffff',
                color: '#020617',
                padding: '10px 22px',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '700',
                textDecoration: 'none'
              }}
            >
              View GitHub Repository
            </a>
          )}
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38bdf8',
                padding: '10px 22px',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              Live Project Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
