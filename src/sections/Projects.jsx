import { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Featured', 'Laravel', 'PHP', 'React', 'Next.js', 'Java', 'AI', 'Full Stack'];

  const filteredProjects = (projectsData || []).filter((project) => {
    const projectTags = Array.isArray(project.tags)
      ? project.tags.map(t => (typeof t === 'string' ? t : t.name || ''))
      : [];

    const matchesCategory =
      selectedCategory === 'All' ||
      (selectedCategory === 'Featured' && (project.badge || '').toLowerCase().includes('featured')) ||
      project.category === selectedCategory ||
      projectTags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()));

    const titleText = (project.title || '').toLowerCase();
    const summaryText = (project.shortDesc || project.summary || '').toLowerCase();
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      titleText.includes(query) ||
      summaryText.includes(query) ||
      projectTags.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" aria-label="Featured Projects" className="section-container">
      <SectionHeader
        title="Featured Projects & Case Studies"
        badge="FILTERABLE WORKS"
        icon="🚀"
        accentColor="#a3e635"
      />

      {/* Filter Tabs & Search Control */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        marginBottom: "36px"
      }}>
        {/* Category Pills */}
        <div style={{
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          paddingBottom: "8px",
          scrollbarWidth: "none"
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                whiteSpace: "nowrap",
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: "600",
                backgroundColor: selectedCategory === cat ? "#38bdf8" : "rgba(30, 41, 59, 0.6)",
                color: selectedCategory === cat ? "#020617" : "#94a3b8",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter projects by keyword or tech stack..."
          style={{
            width: "100%",
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            padding: "12px 18px",
            color: "#ffffff",
            fontSize: "14px",
            outline: "none"
          }}
        />
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px", color: "#64748b", fontSize: "15px" }}>
          No projects match your filter query.
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {filteredProjects.map((project) => {
            const summaryDisplay = project.shortDesc || project.summary || '';
            const githubLink = project.github || project.githubUrl;
            const projectTags = Array.isArray(project.tags)
              ? project.tags.map(t => (typeof t === 'string' ? { name: t, color: '#38bdf8' } : t))
              : [];

            return (
              <GlassCard
                key={project.id}
                style={{ padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{
                      fontSize: "11px",
                      fontWeight: "600",
                      fontFamily: "var(--font-mono)",
                      color: "#a3e635",
                      backgroundColor: "rgba(163, 230, 53, 0.1)",
                      padding: "4px 10px",
                      borderRadius: "8px"
                    }}>
                      {project.badge}
                    </span>
                    <span style={{ fontSize: "12px", color: "#64748b", fontFamily: "var(--font-mono)" }}>
                      {project.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff", margin: "0 0 12px 0" }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.6", margin: "0 0 20px 0" }}>
                    {summaryDisplay}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "24px" }}>
                    {projectTags.map((tag, idx) => (
                      <span key={idx} style={{
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontSize: "11px",
                        fontWeight: "600",
                        color: tag.color || "#38bdf8",
                        backgroundColor: `${tag.color || "#38bdf8"}15`,
                        border: `1px solid ${tag.color || "#38bdf8"}30`
                      }}>
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    style={{
                      backgroundColor: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.3)",
                      color: "#38bdf8",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer"
                    }}
                  >
                    View Case Study
                  </button>
                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "13px", color: "#94a3b8", textDecoration: "none" }}
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>
      )}

      {/* Case Study Modal Popup */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
