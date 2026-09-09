import { useEffect, useState, lazy, Suspense } from "react";
import { ToastProvider } from "./context/ToastContext";
import { initAnalytics } from "./services/analytics";
import { useCommandPalette } from "./hooks/useCommandPalette";
import CommandPalette from "./components/CommandPalette";
import "./portfolio-reference.css";

const DeveloperUniverse = lazy(() => import("./pages/DeveloperUniverse"));

const skills = [
  ["<>\u0026lt;/\u0026gt;", "HTML5 / CSS3", "Frontend"],
  ["PHP", "PHP / Laravel", "Backend"],
  ["⚛", "React.js / Next.js", "Frontend"],
  ["JS", "JavaScript / TypeScript", "Languages"],
  ["A", "Angular", "Frontend"],
  ["◆", "Git / GitHub", "Tools"],
];

function CharacterVisual() {
  return (
    <div className="ref-character" aria-label="Illustrated software developer working at a laptop">
      <div className="ref-person">
        <div className="ref-hair" />
        <div className="ref-head" />
        <div className="ref-glasses"><i /><i /></div>
        <div className="ref-neck" />
        <div className="ref-hoodie" />
        <div className="ref-arm left" />
        <div className="ref-arm right" />
        <div className="ref-laptop"><div className="ref-laptop-screen" /><div className="ref-laptop-base" /></div>
      </div>
      <div className="ref-float-card one">Backend</div>
      <div className="ref-float-card two">Build · Test · Deliver</div>
      <div className="ref-cup" aria-hidden="true" />
    </div>
  );
}

function GlobeVisual() {
  return (
    <div className="ref-globe-panel">
      <div className="ref-globe-stage">
        <div className="ref-globe"><div className="ref-orbit" /></div>
        <span className="ref-globe-chip a">Web</span>
        <span className="ref-globe-chip b">APIs</span>
        <span className="ref-globe-chip c">Testing</span>
      </div>
    </div>
  );
}

function SkillsSection() {
  const filters = ["All", "Languages", "Frontend", "Backend", "Tools"];
  const [activeFilter, setActiveFilter] = useState("All");
  const visible = skills.filter(([, , category]) => activeFilter === "All" || category === activeFilter);
  return (
    <section id="skills" className="ref-section ref-shell">
      <div className="ref-card ref-stack-card ref-reveal">
        <div className="ref-section-label">Technical Skills</div>
        <h2 className="ref-title">Tools &amp; Technologies</h2>
        <p className="ref-body">A focused technology stack built through professional development, testing, and hands-on web application work.</p>
        <div className="ref-filter">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
        <div className="ref-tech-grid ref-tech-grid-six">
          {visible.map(([icon, name]) => <div className="ref-tech" key={name}><span className="ref-tech-icon">{icon}</span><span>{name}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="ref-section ref-shell">
      <div className="ref-card ref-journey ref-reveal">
        <div className="ref-section-label">Work Experience</div>
        <h2 className="ref-title">Professional Journey</h2>
        <p className="ref-body">Backend development, manual testing, customer support, sales, and technical coordination experience.</p>
        <div className="ref-timeline">
          <div className="ref-timeline-row">
            <div className="ref-year">2023 – Present</div>
            <div className="ref-job">
              <strong>Backend Developer &amp; Specialist</strong>
              <small>Sahal Webads Pvt Ltd.</small>
              <ul><li>Develop and maintain backend modules with database operations, validation, error handling, and REST API support.</li><li>Design and execute functional and regression tests, track defects, and verify application quality.</li><li>Support customers and coordinate technical issue resolution through timely service-request closure.</li><li>Promote company services and assist customers with product decisions.</li></ul>
            </div>
          </div>
        </div>
        <div className="ref-journey-art ref-journey-art-enhanced"><div className="ref-path" /><div className="ref-flag" /><span>Reliable</span><span>Tested</span><span>Delivered</span></div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="ref-section ref-shell">
      <div className="ref-grid-two">
        <article className="ref-card ref-info-card ref-reveal">
          <div className="ref-section-label">Education</div>
          <h2 className="ref-title">Academic Foundation</h2>
          <div className="ref-education-list">
            <div><strong>IFET College of Engineering</strong><span>2019 – 2023 · B.Tech – Information Technology · Aggregate: 71%</span></div>
            <div><strong>Mount Park Matric Hr. Sec. School</strong><span>2019 · HSC · 51.3%</span></div>
            <div><strong>Srignanananda Mat. Hr. Sec. School</strong><span>2017 · SSLC · 78%</span></div>
          </div>
        </article>
        <article className="ref-card ref-info-card ref-reveal">
          <div className="ref-section-label">Courses &amp; Certifications</div>
          <h2 className="ref-title">Continuous Learning</h2>
          <div className="ref-cert-list">
            <div><strong>Cisco Academy</strong><span>Introduction to Cybersecurity · Packet Tracer Essentials · Cybersecurity Essentials Certification</span></div>
            <div><strong>Accord Info Matrix</strong><span>6-Month Certification Course · Web Development, Core Java, Dot NET</span></div>
            <div><strong>Le-Meniz, Puducherry</strong><span>1-Month Certification Internship · Web Development</span></div>
          </div>
        </article>
      </div>
    </section>
  );
}

function AppHome({ onEnterUniverse }) {
  const { isOpen, openPalette, closePalette } = useCommandPalette();
  useEffect(() => { initAnalytics(); }, []);
  useEffect(() => {
    const reveal = () => document.querySelectorAll(".ref-reveal").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.88) el.classList.add("visible");
    });
    reveal();
    window.addEventListener("scroll", reveal, { passive: true });
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="ref-site">
      <nav className="ref-nav" aria-label="Primary navigation">
        <a className="ref-logo" href="#top">SHEIK</a>
        <div className="ref-links"><a href="#top">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#contact">Contact</a></div>
        <a className="ref-nav-cta" href="#contact">Let&apos;s Connect</a>
      </nav>

      <main id="top">
        <section className="ref-hero ref-shell" aria-label="Professional introduction">
          <div className="ref-reveal">
            <div className="ref-eyebrow">Hello, I&apos;m</div>
            <h1 className="ref-h1">Sheik <span>Jamsheer Basha</span></h1>
            <div className="ref-role">Software Developer</div>
            <p className="ref-copy">A motivated and disciplined Information Technology graduate with professional experience in backend development, manual testing, customer support, sales, and technical coordination.</p>
            <div className="ref-actions"><a className="ref-btn ref-btn-primary" href="#experience">View Experience →</a><a className="ref-btn ref-btn-outline" href="/Sheik_Jamsheer_Basha_Resume.html" download>Download Resume</a></div>
            <div className="ref-socials"><a href="tel:+918248517785">◉ +91 82485 17785</a><a href="mailto:sheikjamsheerbasha@gmail.com">◎ Email</a><a href="https://github.com/sheikjamsheerbasha02" target="_blank" rel="noreferrer">◉ GitHub</a></div>
          </div>
          <CharacterVisual />
        </section>

        <section id="about" className="ref-section ref-shell">
          <div className="ref-grid-two">
            <article className="ref-card ref-about ref-reveal"><div className="ref-section-label">About Me</div><h2 className="ref-title">Practical Engineering. Continuous Growth.</h2><p className="ref-body">A motivated and disciplined graduate seeking opportunities where academic knowledge, analytical thinking, and problem-solving abilities can contribute to organizational goals. Focused on learning new technologies, adapting to professional environments, working with teams, and improving consistently through dedication and performance.</p><div className="ref-stats"><div className="ref-stat"><strong>2023</strong><span>Professional Experience Since</span></div><div className="ref-stat"><strong>6+</strong><span>Core Skill Areas</span></div><div className="ref-stat"><strong>3</strong><span>Academic Milestones</span></div></div></article>
            <article className="ref-card ref-reveal"><GlobeVisual /></article>
          </div>
        </section>

        <SkillsSection />
        <ExperienceSection />
        <EducationSection />

        <section id="contact" className="ref-section ref-shell">
          <div className="ref-card ref-contact ref-reveal">
            <div className="ref-contact-copy"><div className="ref-section-label">Get In Touch</div><h2 className="ref-title">Let&apos;s Connect</h2><p className="ref-body">Open to professional opportunities where I can contribute through software development, testing, technical support, and continuous learning.</p><div className="ref-contact-details"><a href="mailto:sheikjamsheerbasha@gmail.com"><strong>Email</strong><span>sheikjamsheerbasha@gmail.com</span></a><a href="tel:+918248517785"><strong>Phone</strong><span>+91 82485 17785</span></a><a href="https://jamsheer-portfolio.vercel.app" target="_blank" rel="noreferrer"><strong>Portfolio</strong><span>jamsheer-portfolio.vercel.app</span></a></div><div className="ref-actions"><a className="ref-btn ref-btn-primary" href="mailto:sheikjamsheerbasha@gmail.com">Send an Email →</a></div></div><div className="ref-contact-art" aria-hidden="true"><div className="ref-plant"><div className="ref-leaf"/><div className="ref-leaf"/><div className="ref-leaf"/><div className="ref-pot"/></div><div className="ref-monitor"/><div className="ref-desk"/><div className="ref-chair"/></div>
          </div>
        </section>
      </main>

      <footer className="ref-footer">© {new Date().getFullYear()} Sheik Jamsheer Basha · Software Developer</footer>
      <button onClick={onEnterUniverse} className="ref-universe-btn">Developer Universe ↗</button>
      <button onClick={openPalette} className="ref-command-btn" aria-label="Open command palette">⌘K</button>
      <CommandPalette isOpen={isOpen} onClose={closePalette} />
    </div>
  );
}

export default function App() {
  const [viewMode, setViewMode] = useState("recruiter");
  if (viewMode === "universe") return <Suspense fallback={<div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#020617", color: "#38bdf8", fontFamily: "monospace" }}>Initializing Developer Universe 3D Engine...</div>}><DeveloperUniverse onExit={() => setViewMode("recruiter")} /></Suspense>;
  return <ToastProvider><AppHome onEnterUniverse={() => setViewMode("universe")} /></ToastProvider>;
}
