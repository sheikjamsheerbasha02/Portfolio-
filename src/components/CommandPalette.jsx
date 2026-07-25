import { useState } from 'react';
import { navLinks, projectsData } from '../data/portfolioData';
import { useToast } from '../hooks/useToast';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const { addToast } = useToast();

  if (!isOpen) return null;

  const filteredLinks = navLinks.filter(link =>
    link.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleNavigate = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    onClose();
    navigator.clipboard.writeText('sheikjamsheerbasha02@gmail.com');
    addToast('Copied email to clipboard!', 'success');
  };

  const handleResumeDownload = () => {
    onClose();
    addToast('Initiated resume request download!', 'info');
  };

  return (
    <div
      role="dialog"
      aria-label="Command Palette Search"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(2, 6, 23, 0.8)',
        backdropFilter: 'blur(12px)',
        zIndex: 3000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '100px'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'clamp(320px, 90vw, 600px)',
          backgroundColor: '#0f172a',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '20px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7)',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease-out forwards'
        }}
      >
        {/* Search Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{ fontSize: '18px', color: '#38bdf8' }}>🔍</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search sections, projects..."
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '16px',
              outline: 'none',
              fontFamily: 'var(--font-sans)'
            }}
          />
          <kbd style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#94a3b8',
            padding: '2px 8px',
            borderRadius: '6px',
            fontSize: '12px',
            fontFamily: 'var(--font-mono)'
          }}>ESC</kbd>
        </div>

        {/* Results Stream */}
        <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '12px' }}>
          {/* Quick Actions */}
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', fontFamily: 'var(--font-mono)', padding: '0 8px' }}>
              QUICK ACTIONS
            </span>
            <div
              onClick={handleCopyEmail}
              style={{
                padding: '10px 12px',
                borderRadius: '8px',
                color: '#f8fafc',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '14px',
                marginTop: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)'
              }}
            >
              <span>📧 Copy Contact Email</span>
              <span style={{ color: '#38bdf8', fontSize: '12px' }}>Action</span>
            </div>

            <div
              onClick={handleResumeDownload}
              style={{
                padding: '10px 12px',
                borderRadius: '8px',
                color: '#f8fafc',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '14px',
                marginTop: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)'
              }}
            >
              <span>📄 Download Resume</span>
              <span style={{ color: '#a3e635', fontSize: '12px' }}>Download</span>
            </div>
          </div>

          {/* Section Navigation */}
          {filteredLinks.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', fontFamily: 'var(--font-mono)', padding: '0 8px' }}>
                NAVIGATION
              </span>
              {filteredLinks.map((link) => (
                <div
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '14px',
                    marginTop: '4px'
                  }}
                >
                  <span>Go to {link.label}</span>
                  <span style={{ color: '#64748b', fontSize: '12px' }}>#{link.id}</span>
                </div>
              ))}
            </div>
          )}

          {/* Projects Search */}
          {filteredProjects.length > 0 && (
            <div>
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', fontFamily: 'var(--font-mono)', padding: '0 8px' }}>
                PROJECTS
              </span>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleNavigate('projects')}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '14px',
                    marginTop: '4px'
                  }}
                >
                  <span>🚀 {project.title}</span>
                  <span style={{ color: '#a3e635', fontSize: '12px' }}>{project.category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
