import { blogData, blogPosts } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import GlassCard from '../components/common/GlassCard';

export default function Blog() {
  const posts = blogData || blogPosts || [];

  return (
    <section id="blog" aria-label="Engineering Articles" className="section-container">
      <SectionHeader
        title="Engineering Articles & Writing"
        badge="TECHNICAL INSIGHTS"
        icon="✍️"
        accentColor="#f59e0b"
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        {posts.map((post) => {
          const categoryText = post.category || 'Architecture';
          const excerptText = post.snippet || post.excerpt || '';
          const articleLink = post.link || '#';

          return (
            <GlassCard key={post.id} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "600", fontFamily: "var(--font-mono)" }}>
                    {categoryText}
                  </span>
                  <span style={{ fontSize: "12px", color: "#64748b", fontFamily: "var(--font-mono)" }}>
                    {post.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: "0 0 10px 0" }}>
                  {post.title}
                </h3>

                <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.6", margin: "0 0 20px 0" }}>
                  {excerptText}
                </p>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "12px", color: "#64748b" }}>{post.date}</span>
                <a
                  href={articleLink}
                  style={{ fontSize: "13px", color: "#38bdf8", fontWeight: "600", textDecoration: "none" }}
                >
                  Read Article →
                </a>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
