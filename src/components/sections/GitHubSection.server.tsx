import { fetchGitHubRepos, fetchGitHubProfile } from "@/lib/github";
import { githubConfig } from "@/lib/data";
import { GitHubSectionClient } from "@/components/sections/GitHubSection";

export async function GitHubSection() {
  const [repos, profile] = await Promise.all([
    fetchGitHubRepos(githubConfig.username),
    fetchGitHubProfile(githubConfig.username),
  ]);

  return <GitHubSectionClient repos={repos} profile={profile} />;
}
