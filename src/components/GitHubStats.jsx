import { useState, useEffect } from 'react';
import { fetchGitHubStats } from '../services/githubService';

export default function GitHubStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchGitHubStats().then(setStats);
  }, []);

  if (!stats) return null;

  return (
    <div style={{
      backgroundColor: "rgba(15, 23, 42, 0.65)",
      border: "1px solid rgba(56, 189, 248, 0.2)",
      borderRadius: "20px",
      padding: "24px",
      marginTop: "32px",
      backdropFilter: "blur(12px)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "22px" }}>🐙</span>
          <div>
            <h4 style={{ margin: 0, color: "#ffffff", fontSize: "16px", fontWeight: "700" }}>
              GitHub Activity & Statistics
            </h4>
            <span style={{ fontSize: "12px", color: "#64748b", fontFamily: "var(--font-mono)" }}>
              @{stats.username}
            </span>
          </div>
        </div>
        <a
          href={`https://github.com/${stats.username}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "12px", color: "#38bdf8", fontWeight: "600", textDecoration: "none" }}
        >
          View Profile →
        </a>
      </div>

      {/* Metrics Row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "16px",
        marginBottom: "16px"
      }}>
        <div style={{ backgroundColor: "rgba(30, 41, 59, 0.5)", padding: "12px", borderRadius: "12px", textAlign: "center" }}>
          <span style={{ fontSize: "20px", fontWeight: "800", color: "#38bdf8", display: "block" }}>{stats.publicRepos}</span>
          <span style={{ fontSize: "11px", color: "#94a3b8" }}>Public Repos</span>
        </div>
        <div style={{ backgroundColor: "rgba(30, 41, 59, 0.5)", padding: "12px", borderRadius: "12px", textAlign: "center" }}>
          <span style={{ fontSize: "20px", fontWeight: "800", color: "#a3e635", display: "block" }}>{stats.contributionsThisYear}+</span>
          <span style={{ fontSize: "11px", color: "#94a3b8" }}>Contributions</span>
        </div>
        <div style={{ backgroundColor: "rgba(30, 41, 59, 0.5)", padding: "12px", borderRadius: "12px", textAlign: "center" }}>
          <span style={{ fontSize: "20px", fontWeight: "800", color: "#f59e0b", display: "block" }}>{stats.stars}</span>
          <span style={{ fontSize: "11px", color: "#94a3b8" }}>Stars Earned</span>
        </div>
      </div>

      {/* Recent Commit */}
      <div style={{
        backgroundColor: "rgba(2, 6, 23, 0.5)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        padding: "12px 16px",
        borderRadius: "10px",
        fontSize: "12px",
        color: "#94a3b8",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px"
      }}>
        <span>🔨 <strong style={{ color: "#ffffff" }}>{stats.recentCommit.repo}:</strong> {stats.recentCommit.message}</span>
        <span style={{ color: "#64748b", fontFamily: "var(--font-mono)" }}>{stats.recentCommit.time}</span>
      </div>
    </div>
  );
}
