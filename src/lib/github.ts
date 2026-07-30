export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github.v3+json" },
      }
    );

    if (!res.ok) return [];

    const data: GitHubRepo[] = await res.json();
    return data.filter((repo) => !repo.name.includes("fork")).slice(0, 6);
  } catch {
    return [];
  }
}

export async function fetchGitHubProfile(username: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github.v3+json" },
    });

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
