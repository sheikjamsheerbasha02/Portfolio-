import { useState, useEffect } from 'react';
import { developerInfo } from '../data/portfolioData';

const TITLES = [
  "Software Engineer",
  "PHP & Laravel Developer",
  "Full Stack Developer"
];

export default function Hero({ onEnterDeveloperUniverse }) {
  const [typedTitle, setTypedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let charIdx = 0;
    let timeoutId;

    const type = () => {
      const currentFullTitle = TITLES[titleIndex];
      if (isDeleting) {
        currentText = currentFullTitle.substring(0, charIdx - 1);
        charIdx--;
      } else {
        currentText = currentFullTitle.substring(0, charIdx + 1);
        charIdx++;
      }

      setTypedTitle(currentText);

      let delta = 100;
      if (isDeleting) delta /= 2;

      if (!isDeleting && charIdx === currentFullTitle.length) {
        delta = 2000;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        delta = 500;
      }

      timeoutId = setTimeout(type, delta);
    };

    timeoutId = setTimeout(type, 100);
    return () => clearTimeout(timeoutId);
  }, [titleIndex]);

  return (
    <section id="hero" aria-label="Hero Introduction" className="section-container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '48px',
        alignItems: 'center'
      }}>
        {/* Left Column: Headline & CTAs */}
        <div>
          {/* Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '9999px',
            padding: '6px 16px',
            marginBottom: '24px'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#10b981', letterSpacing: '0.5px' }}>
              {developerInfo.status}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '800', color: '#ffffff', lineHeight: 1.1, margin: '0 0 16px 0', letterSpacing: '-0.02em' }}>
            Hi, I&apos;m <span style={{ color: '#38bdf8' }}>{developerInfo.name}</span>
          </h1>

          {/* Typewriter Dynamic Title */}
          <h2 style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: '700', color: '#a3e635', fontFamily: 'var(--font-mono)', minHeight: '44px', margin: '0 0 24px 0' }}>
            {typedTitle}<span className="animate-pulse">|</span>
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7', maxWidth: '580px', marginBottom: '36px' }}>
            {developerInfo.tagline} Experienced in building high-performance Laravel backend APIs, responsive React 19 web applications, and database-driven enterprise platforms.
          </p>

          {/* 3 Primary CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            {/* 1. Download Resume */}
            <a
              href="/Sheik_Jamsheer_Basha_Resume.html"
              download="Sheik_Jamsheer_Basha_Resume.html"
              style={{
                backgroundColor: '#38bdf8',
                color: '#020617',
                padding: '14px 28px',
                borderRadius: '9999px',
                fontSize: '15px',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>📄</span>
              <span>Download Resume</span>
            </a>

            {/* 2. Get In Touch */}
            <a
              href="#contact"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '9999px',
                fontSize: '15px',
                fontWeight: '700',
                textDecoration: 'none'
              }}
            >
              Get In Touch
            </a>

            {/* 3. Enter Developer Universe */}
            <button
              onClick={onEnterDeveloperUniverse}
              style={{
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.4)',
                color: '#a5b4fc',
                padding: '14px 28px',
                borderRadius: '9999px',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>🚀</span>
              <span>Enter Developer Universe</span>
            </button>
          </div>
        </div>

        {/* Right Column: Profile Card */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'relative',
            width: '280px',
            height: '340px',
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '24px',
            padding: '24px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '44px',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '20px',
              boxShadow: '0 0 30px rgba(56, 189, 248, 0.4)'
            }}>
              SJ
            </div>
            <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', color: '#ffffff', fontWeight: '800' }}>{developerInfo.name}</h3>
            <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>Full Stack Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
