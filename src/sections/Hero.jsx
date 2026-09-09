import { useState, useEffect } from 'react';
import { developerInfo } from '../data/portfolioData';

const TITLES = [
  'Software Engineer',
  'PHP & Laravel Developer',
  'Full Stack Developer',
  'AI Systems Builder'
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

      let delta = isDeleting ? 50 : 90;
      if (!isDeleting && charIdx === currentFullTitle.length) {
        delta = 1700;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        delta = 450;
      }

      timeoutId = setTimeout(type, delta);
    };

    timeoutId = setTimeout(type, 120);
    return () => clearTimeout(timeoutId);
  }, [titleIndex]);

  return (
    <section id="hero" aria-label="Hero Introduction" className="section-container hero-v4">
      <style>{`
        .hero-v4 {
          min-height: calc(100vh - 68px);
          display: flex;
          align-items: center;
          padding-top: 92px;
          padding-bottom: 92px;
          overflow: hidden;
        }

        .hero-v4::after {
          content: '';
          position: absolute;
          width: 520px;
          height: 520px;
          right: -180px;
          top: 5%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.13), transparent 68%);
          pointer-events: none;
        }

        .hero-grid-v4 {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
          gap: clamp(48px, 7vw, 100px);
          align-items: center;
        }

        .hero-kicker-v4 {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 7px 13px;
          margin-bottom: 22px;
          border: 1px solid rgba(52, 211, 153, 0.25);
          border-radius: 999px;
          background: rgba(16, 185, 129, 0.07);
          color: #6ee7b7;
          font: 700 11px/1 var(--font-mono);
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .hero-kicker-v4 i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 14px #34d399;
          animation: pulseGlow 2.2s ease-in-out infinite;
        }

        .hero-title-v4 {
          margin: 0;
          max-width: 780px;
          font-size: clamp(46px, 7vw, 82px);
          line-height: .98;
          letter-spacing: -.055em;
          font-weight: 850;
          color: #f8fafc;
        }

        .hero-title-v4 span {
          display: block;
          background: linear-gradient(110deg, #f8fafc 0%, #7dd3fc 48%, #38bdf8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-role-v4 {
          margin: 22px 0 18px;
          min-height: 36px;
          color: #bef264;
          font: 700 clamp(20px, 3vw, 28px)/1.3 var(--font-mono);
        }

        .hero-copy-v4 {
          max-width: 650px;
          margin: 0;
          color: #a7b4c8;
          font-size: clamp(15px, 1.6vw, 18px);
          line-height: 1.8;
        }

        .hero-actions-v4 {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .hero-btn-v4 {
          border-radius: 12px;
          padding: 12px 18px;
          font-size: 13px;
          font-weight: 750;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform .25s ease, border-color .25s ease, background .25s ease, box-shadow .25s ease;
        }

        .hero-btn-v4:hover { transform: translateY(-2px); }

        .hero-btn-primary-v4 {
          background: #f8fafc;
          color: #020617;
          box-shadow: 0 14px 35px rgba(0,0,0,.28);
        }

        .hero-btn-primary-v4:hover { box-shadow: 0 18px 40px rgba(56,189,248,.2); }

        .hero-btn-secondary-v4 {
          border: 1px solid rgba(148,163,184,.2);
          background: rgba(15,23,42,.55);
          color: #e2e8f0;
        }

        .hero-btn-secondary-v4:hover { border-color: rgba(56,189,248,.45); background: rgba(56,189,248,.07); }

        .hero-btn-universe-v4 {
          border: 1px solid rgba(129,140,248,.3);
          background: rgba(99,102,241,.09);
          color: #c7d2fe;
        }

        .hero-visual-v4 {
          position: relative;
          min-height: 520px;
          display: grid;
          place-items: center;
          perspective: 1200px;
        }

        .hero-orbit-v4 {
          position: absolute;
          width: min(470px, 88vw);
          aspect-ratio: 1;
          border: 1px solid rgba(56,189,248,.15);
          border-radius: 50%;
          transform: rotateX(64deg);
          box-shadow: 0 0 60px rgba(56,189,248,.07), inset 0 0 60px rgba(99,102,241,.05);
        }

        .hero-orbit-v4::before, .hero-orbit-v4::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 18px rgba(56,189,248,.8);
        }
        .hero-orbit-v4::before { width: 8px; height: 8px; top: 18%; left: 12%; }
        .hero-orbit-v4::after { width: 6px; height: 6px; right: 9%; bottom: 22%; background: #a78bfa; box-shadow: 0 0 18px rgba(167,139,250,.9); }

        .hero-orbit-inner-v4 {
          position: absolute;
          width: 360px;
          aspect-ratio: 1;
          border: 1px dashed rgba(167,139,250,.22);
          border-radius: 50%;
          transform: rotateX(64deg) rotateZ(28deg);
        }

        .hero-core-v4 {
          position: relative;
          width: 220px;
          height: 220px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, rgba(125,211,252,.36), rgba(30,41,59,.85) 42%, rgba(2,6,23,.96) 72%);
          border: 1px solid rgba(56,189,248,.4);
          box-shadow: 0 0 80px rgba(56,189,248,.13), inset 0 0 60px rgba(99,102,241,.13);
          transform: translateZ(50px);
        }

        .hero-core-v4::before {
          content: '';
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          border: 1px solid rgba(56,189,248,.24);
          box-shadow: inset 0 0 28px rgba(56,189,248,.12);
        }

        .hero-core-v4 strong { position: relative; z-index: 2; font-size: 46px; letter-spacing: -.06em; color: #fff; }
        .hero-core-v4 small { position: absolute; z-index: 2; bottom: 52px; color: #7dd3fc; font: 600 9px var(--font-mono); letter-spacing: .18em; text-transform: uppercase; }

        .hero-console-v4 {
          position: absolute;
          right: 0;
          bottom: 18px;
          width: 210px;
          padding: 14px;
          border: 1px solid rgba(148,163,184,.14);
          border-radius: 16px;
          background: rgba(2,6,23,.74);
          backdrop-filter: blur(14px);
          box-shadow: 0 20px 50px rgba(0,0,0,.35);
          animation: floatAnim 5s ease-in-out infinite;
        }

        .hero-console-v4 header { display:flex; justify-content:space-between; align-items:center; color:#64748b; font:600 9px var(--font-mono); }
        .hero-console-v4 code { display:block; margin-top:10px; color:#94a3b8; font:500 10px/1.8 var(--font-mono); }
        .hero-console-v4 b { color:#a3e635; font-weight:600; }

        @media (max-width: 900px) {
          .hero-v4 { min-height: auto; }
          .hero-grid-v4 { grid-template-columns: 1fr; }
          .hero-visual-v4 { min-height: 430px; order: -1; }
          .hero-console-v4 { right: 4%; }
        }

        @media (max-width: 560px) {
          .hero-title-v4 { font-size: clamp(42px, 14vw, 62px); }
          .hero-visual-v4 { min-height: 360px; transform: scale(.86); transform-origin: center; margin: -35px 0; }
          .hero-console-v4 { display: none; }
        }
      `}</style>

      <div className="hero-grid-v4">
        <div>
          <div className="hero-kicker-v4"><i /> Available for software engineering opportunities</div>

          <h1 className="hero-title-v4">
            Hi, I&apos;m
            <span>{developerInfo.name}</span>
          </h1>

          <h2 className="hero-role-v4">
            {typedTitle}<span aria-hidden="true">▋</span>
          </h2>

          <p className="hero-copy-v4">
            {developerInfo.tagline} I build reliable backend systems, polished React applications,
            and practical AI-powered experiences with a focus on maintainability, performance, and product impact.
          </p>

          <div className="hero-actions-v4">
            <a className="hero-btn-v4 hero-btn-primary-v4" href="/Sheik_Jamsheer_Basha_Resume.html" download="Sheik_Jamsheer_Basha_Resume.html">
              <span>↘</span> Download Resume
            </a>
            <a className="hero-btn-v4 hero-btn-secondary-v4" href="#contact">Let&apos;s Build</a>
            <button className="hero-btn-v4 hero-btn-universe-v4" onClick={onEnterDeveloperUniverse}>
              <span>◈</span> Enter Developer Universe
            </button>
          </div>
        </div>

        <div className="hero-visual-v4" aria-label="Interactive engineering system visual">
          <div className="hero-orbit-v4" />
          <div className="hero-orbit-inner-v4" />
          <div className="hero-core-v4">
            <strong>SJ</strong>
            <small>Software / AI</small>
          </div>
          <div className="hero-console-v4">
            <header><span>system.status</span><span>● online</span></header>
            <code>
              stack: <b>React + Laravel</b><br />
              focus: <b>AI systems</b><br />
              mode: <b>build / iterate</b>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
