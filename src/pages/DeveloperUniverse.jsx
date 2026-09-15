import { useEffect, useState } from 'react';
import IntroLoader from '../components/3d/IntroLoader';
import CursorFollower from '../components/common/CursorFollower';
import { developerInfo, techStackCategories, projectCaseStudies, workExperience, educationList } from '../data/portfolioData';
import { useToast } from '../hooks/useToast';
import '../developer-universe.css';

const jumpTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export default function DeveloperUniverse({ onExit }) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { addToast } = useToast();

  useEffect(() => {
    document.title = 'Developer Universe — Sheik Jamsheer Basha';
    return () => { document.title = 'Sheik Jamsheer Basha — Software Developer'; };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(developerInfo.email);
      addToast(`Copied ${developerInfo.email} to clipboard!`, 'success');
    } catch {
      addToast('Unable to copy email. Please use the email link.', 'error');
    }
  };

  const primarySkills = techStackCategories.flatMap((category) => category.skills).slice(0, 8);

  return (
    <div className="du-page">
      <CursorFollower />
      {!loadingComplete && <IntroLoader onComplete={() => setLoadingComplete(true)} />}

      <header className="du-topbar">
        <button className="du-back" onClick={onExit}>← Recruiter Portfolio</button>
        <div className="du-brand">DEVELOPER</div>
        <nav className="du-nav" aria-label="Developer Universe navigation">
          <button onClick={() => jumpTo('du-about')}>About</button>
          <button onClick={() => jumpTo('du-skills')}>Skills</button>
          <button onClick={() => jumpTo('du-projects')}>Projects</button>
          <button onClick={() => jumpTo('du-experience')}>Experience</button>
        </nav>
      </header>

      <main className="du-shell">
        <section className="du-hero" aria-label="Developer identity">
          <aside className="du-panel du-sidebar">
            <div className="du-status"><strong>02+</strong></div>
            <h2 className="du-side-title">ABOUT ME</h2>
            <button className="du-side-link" onClick={() => jumpTo('du-about')}><b>01</b> Developer Profile</button>
            <button className="du-side-link" onClick={() => jumpTo('du-projects')}><b>02</b> Project Galaxy</button>
            <button className="du-side-link" onClick={() => jumpTo('du-skills')}><b>03</b> Skills Matrix</button>
            <button className="du-side-link" onClick={() => jumpTo('du-contact')}><b>04</b> Contact</button>
            <div className="du-side-bottom"><div className="du-mini">⌘</div><div className="du-mini">⌁</div></div>
          </aside>

          <section className="du-panel du-main">
            <div className="du-kicker">SYSTEM // DEVELOPER PROFILE</div>
            <h1>{developerInfo.name}</h1>
            <div className="du-role">SOFTWARE DEVELOPER</div>
            <div className="du-socials">
              <a href={developerInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
              <a href={developerInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href={`mailto:${developerInfo.email}`} aria-label="Email">@</a>
              <a href={`tel:${developerInfo.phone.replace(/\s/g, '')}`} aria-label="Phone">☎</a>
            </div>
            <p className="du-copy">{developerInfo.tagline}</p>
            <div className="du-portrait">
              <div className="du-orbit" aria-hidden="true" />
              <img className="du-photo" src="/file_0000000071d08211973f749121994a91.png" alt="Sheik Jamsheer Basha" />
            </div>
            <div id="du-about" className="du-about">A motivated and disciplined Information Technology graduate with professional experience in backend development, manual testing, customer support, sales, and technical coordination. Focused on practical engineering, continuous learning, and reliable delivery.</div>
            <button className="du-cta" onClick={() => jumpTo('du-projects')}>EXPLORE MY WORK →</button>
          </section>

          <aside className="du-panel du-right">
            <pre className="du-code">{`// developer.config\nconst developer = {\n  role: "Software Developer",\n  backend: ["PHP", "Laravel"],\n  frontend: ["React", "JavaScript"],\n  database: ["MySQL", "PostgreSQL"],\n  quality: "Tested",\n  status: "ONLINE"\n};`}</pre>
            <div className="du-profile">
              <h3>PROFILE // STATUS</h3>
              <div className="du-row"><span>STATUS</span><strong>● ONLINE</strong></div>
              <div className="du-row"><span>EXPERIENCE</span><strong>{developerInfo.metrics.experienceYears}</strong></div>
              <div className="du-row"><span>PROJECTS</span><strong>{developerInfo.metrics.projectsCompleted}</strong></div>
              <div className="du-row"><span>QUALITY</span><strong>{developerInfo.metrics.codeQualityScore}</strong></div>
              <div className="du-row"><span>LOCATION</span><strong>INDIA</strong></div>
            </div>
            <div className="du-scroll">SCROLL TO EXPLORE ↓</div>
          </aside>
        </section>

        <section className="du-dock" aria-label="Developer Universe shortcuts">
          <button className="du-card" onClick={() => jumpTo('du-about')}><div className="du-card-icon">◎</div><h3>ABOUT ME</h3><p>Profile, engineering mindset, and professional direction.</p></button>
          <button className="du-card" onClick={() => jumpTo('du-skills')}><div className="du-card-icon">◇</div><h3>TECH STACK</h3><p>Backend, frontend, databases, and production tooling.</p></button>
          <button className="du-card" onClick={() => jumpTo('du-projects')}><div className="du-card-icon">▣</div><h3>PROJECTS</h3><p>Case studies presented as technical systems.</p></button>
          <button className="du-card" onClick={() => jumpTo('du-experience')}><div className="du-card-icon">◉</div><h3>SKILLS</h3><p>Core technologies and practical engineering capabilities.</p></button>
          <button className="du-card" onClick={() => jumpTo('du-contact')}><div className="du-card-icon">↗</div><h3>CONTACT</h3><p>Connect for software development opportunities.</p></button>
        </section>

        <section id="du-skills" className="du-section">
          <div className="du-section-head"><div><div className="du-section-label">TECHNOLOGY MATRIX</div><h2>Skills &amp; Systems</h2></div></div>
          <div className="du-grid">{techStackCategories.map((category) => <article className="du-panel du-section-panel" key={category.id}><h3>{category.name}</h3><p>{category.description}</p><div className="du-tags">{category.skills.map((skill) => <span className="du-tag" key={skill.name}>{skill.name}</span>)}</div></article>)}</div>
          <div className="du-tags" style={{ marginTop: 18 }}>{primarySkills.map((skill) => <span className="du-tag" key={`primary-${skill.name}`}>{skill.level} · {skill.name}</span>)}</div>
        </section>

        <section id="du-projects" className="du-section">
          <div className="du-section-head"><div><div className="du-section-label">PROJECT GALAXY</div><h2>Selected Systems</h2></div></div>
          <div className="du-grid">{projectCaseStudies.map((project) => <article className="du-panel du-section-panel" key={project.id}><div className="du-section-label">{project.badge}</div><h3>{project.title}</h3><p>{project.tagline}</p><p>{project.summary}</p><div className="du-tags">{project.tags.slice(0, 5).map((tag) => <span className="du-tag" key={tag}>{tag}</span>)}</div><button className="du-cta" onClick={() => setSelectedProject(project)}>OPEN CASE STUDY →</button></article>)}</div>
        </section>

        <section id="du-experience" className="du-section">
          <div className="du-section-head"><div><div className="du-section-label">CAREER TIMELINE</div><h2>Professional Journey</h2></div></div>
          <div className="du-timeline">{workExperience.map((experience) => <article className="du-panel du-section-panel" key={experience.id}><div className="du-row"><span>{experience.company}</span><strong>{experience.period}</strong></div><h3>{experience.role}</h3><p>{experience.location} · {experience.type}</p><ul>{experience.highlights.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul><div className="du-tags">{experience.tech.map((tag) => <span className="du-tag" key={tag}>{tag}</span>)}</div></article>)}</div>
        </section>

        <section id="du-contact" className="du-section">
          <div className="du-section-head"><div><div className="du-section-label">COMMUNICATION TERMINAL</div><h2>Let&apos;s Connect</h2></div></div>
          <div className="du-contact">
            <article className="du-panel du-section-panel"><h3>OPEN CHANNEL</h3><p>Available for professional opportunities involving software development, backend engineering, testing, technical support, and continuous learning.</p><p><a href={`mailto:${developerInfo.email}`}>{developerInfo.email}</a></p><p><a href={`tel:${developerInfo.phone.replace(/\s/g, '')}`}>{developerInfo.phone}</a></p><button className="du-cta" onClick={copyEmail}>COPY EMAIL</button></article>
            <article className="du-panel du-section-panel"><h3>ACADEMIC FOUNDATION</h3>{educationList.slice(0, 3).map((education) => <div className="du-row" key={`${education.institution}-${education.period}`}><span>{education.institution}</span><strong>{education.period}</strong></div>)}</article>
          </div>
        </section>

        <footer className="du-footer">DEVELOPER UNIVERSE // SHEIK JAMSHEER BASHA // SYSTEM ONLINE</footer>
      </main>

      {selectedProject && <div className="du-modal" role="dialog" aria-modal="true" aria-label={`${selectedProject.title} case study`} onClick={() => setSelectedProject(null)}><div className="du-modal-card" onClick={(event) => event.stopPropagation()}><div className="du-modal-head"><div><div className="du-section-label">{selectedProject.badge}</div><h2>{selectedProject.title}</h2></div><button className="du-close" onClick={() => setSelectedProject(null)} aria-label="Close">×</button></div><p>{selectedProject.summary}</p><div className="du-grid"><div><div className="du-section-label">PROBLEM</div><p>{selectedProject.architecture.problem}</p></div><div><div className="du-section-label">SOLUTION</div><p>{selectedProject.architecture.solution}</p></div><div><div className="du-section-label">BACKEND</div><p>{selectedProject.architecture.backend}</p></div><div><div className="du-section-label">FRONTEND</div><p>{selectedProject.architecture.frontend}</p></div></div><div className="du-tags">{selectedProject.architecture.keyFeatures.map((feature) => <span className="du-tag" key={feature}>{feature}</span>)}</div></div></div>}
    </div>
  );
}
