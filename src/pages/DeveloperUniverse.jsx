import { useState, useEffect } from 'react';
import Resume3DCanvas from '../components/canvas/Resume3DCanvas';
import IntroLoader from '../components/3d/IntroLoader';
import CursorFollower from '../components/common/CursorFollower';
import { developerInfo, techStackCategories, projectCaseStudies, workExperience, educationList, achievements } from '../data/portfolioData';
import { useToast } from '../hooks/useToast';

export default function DeveloperUniverse({ onExit }) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [activeWorld, setActiveWorld] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const { addToast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollPos / (docHeight || 1);

      if (progress < 0.12) setActiveWorld(1);
      else if (progress < 0.25) setActiveWorld(2);
      else if (progress < 0.38) setActiveWorld(3);
      else if (progress < 0.52) setActiveWorld(4);
      else if (progress < 0.65) setActiveWorld(5);
      else if (progress < 0.78) setActiveWorld(6);
      else if (progress < 0.90) setActiveWorld(7);
      else setActiveWorld(8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerInfo.email);
    addToast(`Copied ${developerInfo.email} to clipboard!`, 'success');
  };

  const worlds = [
    { id: 1, name: 'Developer Identity', icon: '💎' },
    { id: 2, name: 'About Me', icon: '👤' },
    { id: 3, name: 'Tech Galaxy', icon: '🪐' },
    { id: 4, name: 'Project Galaxy', icon: '🌌' },
    { id: 5, name: 'Experience Timeline', icon: '⏳' },
    { id: 6, name: 'Education', icon: '🎓' },
    { id: 7, name: 'Achievements', icon: '🏆' },
    { id: 8, name: 'Communication Terminal', icon: '📡' }
  ];

  return (
    <div style={{ backgroundColor: '#020617', color: '#ffffff', minHeight: '100vh', position: 'relative' }}>
      {/* 3D WebGL Backdrop */}
      <Resume3DCanvas />

      {/* Reactive Cursor */}
      <CursorFollower />

      {/* Terminal Boot Loader */}
      {!loadingComplete && (
        <IntroLoader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Universe Navigation Bar */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(2, 6, 23, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.2)'
      }}>
        <button
          onClick={onExit}
          style={{
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            color: '#38bdf8',
            padding: '8px 18px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>← Back to Recruiter Portfolio</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
          <span>CURRENT WORLD:</span>
          <span style={{ color: '#38bdf8', fontWeight: '700' }}>
            WORLD {activeWorld} — {worlds[activeWorld - 1]?.name}
          </span>
        </div>
      </header>

      {/* World Content Sections */}
      <div style={{ paddingTop: '100px', paddingBottom: '100px', maxWidth: '1100px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>

        {/* WORLD 1: DEVELOPER IDENTITY */}
        <section style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div style={{
            fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '3px',
            color: '#38bdf8',
            marginBottom: '16px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            padding: '6px 16px',
            borderRadius: '9999px',
            border: '1px solid rgba(56, 189, 248, 0.3)'
          }}>
            WORLD 1 // HOLOGRAPHIC DEVELOPER IDENTITY
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '800', margin: '0 0 16px 0', letterSpacing: '-0.02em' }}>
            {developerInfo.name}
          </h1>

          <p style={{ fontSize: 'clamp(18px, 3vw, 24px)', color: '#a3e635', fontFamily: 'var(--font-mono)', maxWidth: '750px', margin: '0 0 32px 0' }}>
            {developerInfo.title}
          </p>

          <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '600px', lineHeight: '1.7', margin: '0 0 40px 0' }}>
            {developerInfo.tagline}
          </p>
        </section>

        {/* WORLD 2: ABOUT ME */}
        <section style={{ minHeight: '80vh', padding: '60px 0' }}>
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#6366f1', marginBottom: '16px' }}>
            WORLD 2 // ABOUT ME & TIMELINE
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '24px' }}>Architectural Overview</h2>
          <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '24px', padding: '36px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <p style={{ fontSize: '16px', color: '#cbd5e1', lineHeight: '1.8', margin: 0 }}>
              Disciplined and motivated Full Stack Software Engineer with expertise in PHP 8+, Laravel 10 REST APIs, React 19, MySQL, and Clean Architecture. Experienced in developing scalable e-commerce systems, matrimonial platforms, and AI assistant tools with zero-defect quality standards.
            </p>
          </div>
        </section>

        {/* WORLD 3: TECH GALAXY */}
        <section style={{ minHeight: '80vh', padding: '60px 0' }}>
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#38bdf8', marginBottom: '16px' }}>
            WORLD 3 // TECH GALAXY ORBIT
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '32px' }}>Orbiting Technology Planets</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {techStackCategories.map((cat) => (
              <div key={cat.id} style={{ backgroundColor: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '20px', padding: '24px' }}>
                <div style={{ fontSize: '24px', marginBottom: '12px' }}>{cat.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 8px 0', color: '#ffffff' }}>{cat.name}</h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '16px' }}>{cat.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.skills.map((s) => (
                    <span key={s.name} style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', color: '#38bdf8' }}>
                      {s.icon} {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORLD 4: PROJECT GALAXY */}
        <section style={{ minHeight: '80vh', padding: '60px 0' }}>
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#a3e635', marginBottom: '16px' }}>
            WORLD 4 // PROJECT GALAXY
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '32px' }}>Floating Case Studies</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {projectCaseStudies.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(163, 230, 53, 0.3)',
                  borderRadius: '20px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
              >
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#a3e635', marginBottom: '8px' }}>{project.badge}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 6px 0', color: '#ffffff' }}>{project.title}</h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '16px' }}>{project.tagline}</p>
                <button style={{ backgroundColor: 'rgba(163, 230, 53, 0.15)', border: '1px solid rgba(163, 230, 53, 0.4)', color: '#a3e635', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                  Explore 3D Specs →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* WORLD 5: EXPERIENCE TIMELINE */}
        <section style={{ minHeight: '80vh', padding: '60px 0' }}>
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#f59e0b', marginBottom: '16px' }}>
            WORLD 5 // EXPERIENCE TIMELINE
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '32px' }}>Career Milestones</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {workExperience.map((exp) => (
              <div key={exp.id} style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '20px', padding: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                  <h3 style={{ margin: 0, fontSize: '20px', color: '#ffffff', fontWeight: '700' }}>{exp.role}</h3>
                  <span style={{ color: '#f59e0b', fontFamily: 'var(--font-mono)', fontWeight: '700', fontSize: '14px' }}>{exp.period}</span>
                </div>
                <div style={{ fontSize: '14px', color: '#38bdf8', fontWeight: '600', marginBottom: '16px' }}>{exp.company} • {exp.location}</div>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>
                  {exp.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* WORLD 6: EDUCATION */}
        <section style={{ minHeight: '60vh', padding: '60px 0' }}>
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#ec4899', marginBottom: '16px' }}>
            WORLD 6 // ACADEMIC RECORDS
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '32px' }}>Degrees & Certifications</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {educationList.map((edu, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(236, 72, 153, 0.3)', borderRadius: '20px', padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 6px 0', color: '#ffffff' }}>{edu.degree}</h3>
                <div style={{ fontSize: '13px', color: '#ec4899', fontWeight: '600', marginBottom: '8px' }}>{edu.institution} ({edu.period})</div>
                <div style={{ fontSize: '14px', color: '#a3e635', fontWeight: '700', marginBottom: '8px' }}>Score: {edu.score}</div>
                <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORLD 7: ACHIEVEMENTS */}
        <section style={{ minHeight: '60vh', padding: '60px 0' }}>
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#eab308', marginBottom: '16px' }}>
            WORLD 7 // HACKATHONS & AWARDS
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '32px' }}>Trophies & Wins</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {achievements.map((ach, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(234, 179, 8, 0.3)', borderRadius: '20px', padding: '24px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{ach.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 6px 0', color: '#ffffff' }}>{ach.title}</h3>
                <div style={{ fontSize: '13px', color: '#eab308', fontWeight: '600', marginBottom: '8px' }}>{ach.issuer} ({ach.date})</div>
                <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>{ach.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORLD 8: COMMUNICATION TERMINAL */}
        <section style={{ minHeight: '80vh', padding: '60px 0' }}>
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#10b981', marginBottom: '16px' }}>
            WORLD 8 // FUTURISTIC COMMUNICATION TERMINAL
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '12px', textAlign: 'center' }}>
            Let&apos;s Build Something Amazing Together
          </h2>
          <p style={{ textAlignment: 'center', color: '#94a3b8', fontSize: '16px', marginBottom: '40px', textAlign: 'center' }}>
            Transmit a direct message or download official resume credentials below.
          </p>

          <div style={{
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '24px',
            padding: '36px',
            maxWidth: '650px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <a
              href="/Sheik_Jamsheer_Basha_Resume.html"
              download="Sheik_Jamsheer_Basha_Resume.html"
              style={{
                backgroundColor: '#38bdf8',
                color: '#020617',
                padding: '16px',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: '700',
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              📥 Download Resume (PDF / Printable HTML)
            </a>

            <a
              href="/Sheik_Jamsheer_Basha_Resume.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                padding: '14px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '700',
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              👁️ View Resume Online (HTML)
            </a>

            <button
              onClick={handleCopyEmail}
              style={{
                backgroundColor: 'rgba(163, 230, 53, 0.1)',
                border: '1px solid rgba(163, 230, 53, 0.3)',
                color: '#a3e635',
                padding: '14px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              ✉️ Copy Email ({developerInfo.email})
            </button>
          </div>
        </section>

      </div>

      {/* Project Specs Modal */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(2, 6, 23, 0.9)',
          zIndex: 4000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div style={{
            backgroundColor: '#0f172a',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            borderRadius: '24px',
            padding: '32px',
            maxWidth: '650px',
            width: '100%',
            maxHeight: '85vh',
            overflowY: 'auto'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' }}>
              {selectedProject.title}
            </h3>
            <p style={{ color: '#38bdf8', fontSize: '14px', fontWeight: '600', marginBottom: '20px' }}>
              {selectedProject.tagline}
            </p>
            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
              {selectedProject.summary}
            </p>
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                backgroundColor: '#38bdf8',
                color: '#020617',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '9999px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Close Presentation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
