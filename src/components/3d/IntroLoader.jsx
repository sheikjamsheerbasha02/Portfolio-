import { useState, useEffect } from 'react';

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Derive step cleanly from progress without triggering cascading renders
  const step = progress > 70 ? 3 : progress > 35 ? 2 : 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 600);
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  return (
    <div
      role="dialog"
      aria-label="3D Resume Experience Loading Screen"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#020617',
        zIndex: 5000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
        transform: isFading ? 'scale(1.08)' : 'scale(1)',
        pointerEvents: isFading ? 'none' : 'auto'
      }}
    >
      {/* Brand Logo Sphere */}
      <div
        className="animate-pulse"
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          fontWeight: '800',
          color: '#ffffff',
          marginBottom: '32px',
          boxShadow: '0 0 30px rgba(56, 189, 248, 0.5)'
        }}
      >
        SJ
      </div>

      {/* Sequential Typography Reveal */}
      <div style={{ textAlign: 'center', minHeight: '120px' }}>
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: '800',
          color: '#ffffff',
          margin: '0 0 8px 0',
          letterSpacing: '-0.02em',
          opacity: step >= 1 ? 1 : 0,
          transform: step >= 1 ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.5s ease'
        }}>
          SHEIK JAMSHEER <span style={{ color: '#38bdf8' }}>BASHA</span>
        </h1>

        <h2 style={{
          fontSize: 'clamp(16px, 3vw, 22px)',
          color: '#a3e635',
          fontFamily: 'var(--font-mono)',
          fontWeight: '600',
          margin: 0,
          opacity: step >= 2 ? 1 : 0,
          transform: step >= 2 ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.5s ease'
        }}>
          Software Engineer • PHP & Laravel Developer • Full Stack Developer
        </h2>
      </div>

      {/* Progress Counter & Bar */}
      <div style={{ width: 'clamp(200px, 60vw, 360px)', marginTop: '40px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '12px',
          fontFamily: 'var(--font-mono)',
          color: '#94a3b8',
          marginBottom: '8px'
        }}>
          <span>Initializing 3D World...</span>
          <span style={{ color: '#38bdf8', fontWeight: '700' }}>{progress}%</span>
        </div>

        <div style={{
          height: '6px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#38bdf8',
            borderRadius: '4px',
            boxShadow: '0 0 12px #38bdf8',
            transition: 'width 0.1s linear'
          }}></div>
        </div>
      </div>
    </div>
  );
}
