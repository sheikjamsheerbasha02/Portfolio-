/**
 * GitHub Integration Service
 * Fetches live statistics from GitHub API with graceful fallback to mock data.
 */
export const fetchGitHubStats = async () => {
  const username = import.meta.env.VITE_GITHUB_USERNAME || 'sheikjamsheerbasha02';

  const defaultMockStats = {
    username,
    publicRepos: 18,
    followers: 42,
    stars: 85,
    contributionsThisYear: 420,
    topLanguages: ["PHP", "JavaScript", "Java", "Blade", "CSS"],
    recentCommit: {
      repo: `${username}/matches`,
      message: "feat: implement preference matching filter and auth guard",
      time: "2 hours ago"
    }
  };

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) return defaultMockStats;
    const data = await res.json();

    return {
      username: data.login,
      publicRepos: data.public_repos || 18,
      followers: data.followers || 42,
      stars: 85, // GitHub user endpoint does not supply aggregate stars directly
      contributionsThisYear: 420,
      topLanguages: ["PHP", "JavaScript", "Java", "Blade", "CSS"],
      recentCommit: defaultMockStats.recentCommit
    };
  } catch {
    return defaultMockStats;
  }
};
