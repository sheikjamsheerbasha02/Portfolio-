export default function CodeBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      backgroundColor: '#020617',
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {/* Background Grid Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Radial Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70vw',
        height: '70vw',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      {/* Floating Translucent Watermarks */}
      <div className="animate-float" style={{
        position: 'absolute',
        top: '12%',
        left: '4%',
        color: 'rgba(56, 189, 248, 0.03)',
        fontSize: 'clamp(80px, 12vw, 140px)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 'bold',
        userSelect: 'none'
      }}>{`{ }`}</div>

      <div className="animate-float" style={{
        position: 'absolute',
        bottom: '15%',
        right: '5%',
        color: 'rgba(56, 189, 248, 0.03)',
        fontSize: 'clamp(80px, 12vw, 140px)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 'bold',
        animationDelay: '1.5s',
        userSelect: 'none'
      }}>{`</>`}</div>

      <div style={{
        position: 'absolute',
        top: '45%',
        right: '12%',
        color: 'rgba(56, 189, 248, 0.02)',
        fontSize: 'clamp(60px, 8vw, 100px)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 'bold',
        userSelect: 'none'
      }}>{`if()`}</div>

      <div style={{
        position: 'absolute',
        bottom: '25%',
        left: '8%',
        color: 'rgba(56, 189, 248, 0.02)',
        fontSize: 'clamp(50px, 6vw, 80px)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 'bold',
        userSelect: 'none'
      }}>{`const`}</div>
    </div>
  );
}
