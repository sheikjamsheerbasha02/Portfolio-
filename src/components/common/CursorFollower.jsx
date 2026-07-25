import { useState, useEffect } from 'react';

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"], .glass-panel');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovered ? '48px' : '24px',
        height: isHovered ? '48px' : '24px',
        borderRadius: '50%',
        border: `2px solid ${isHovered ? '#a3e635' : '#38bdf8'}`,
        backgroundColor: isHovered ? 'rgba(163, 230, 53, 0.15)' : 'rgba(56, 189, 248, 0.1)',
        boxShadow: isHovered ? '0 0 20px rgba(163, 230, 53, 0.4)' : '0 0 15px rgba(56, 189, 248, 0.3)',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate3d(${pos.x - (isHovered ? 24 : 12)}px, ${pos.y - (isHovered ? 24 : 12)}px, 0)`,
        transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
        willChange: 'transform'
      }}
    />
  );
}
