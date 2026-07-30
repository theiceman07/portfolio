"use client";

import Image from "next/image";
import { githubConfig, siteConfig } from "@/lib/data";
import type { GitHubRepo } from "@/lib/github";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";

interface GitHubSectionProps {
  repos: GitHubRepo[];
  profile: {
    public_repos?: number;
    followers?: number;
    following?: number;
  } | null;
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel focus-ring group block rounded-sm p-5 transition-colors hover:border-accent/15"
      data-cursor="hover"
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="font-mono text-sm text-foreground transition-colors group-hover:text-accent">
          {repo.name}
        </h3>
        <span className="font-mono text-[10px] text-steel" aria-hidden>
          →
        </span>
      </div>
      <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-[rgba(220,218,240,0.8)]">
        {repo.description || "No description provided."}
      </p>
      <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] text-steel">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-accent/60" aria-hidden />
            {repo.language}
          </span>
        )}
        <span>★ {repo.stargazers_count}</span>
        <span>⑂ {repo.forks_count}</span>
      </div>
    </a>
  );
}

import { useState } from "react";

function GraphImage({
  src,
  alt,
  width,
  height,
  className,
  skeletonHeightClass,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  skeletonHeightClass: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  if (isError) {
    return (
      <div className={`flex items-center justify-center rounded-sm border border-glass-border bg-glass-bg p-6 text-center ${skeletonHeightClass}`}>
        <p className="font-mono text-xs text-[rgba(220,218,240,0.8)]">
          Contribution data temporarily unavailable.{" "}
          <a
            href={siteConfig.githubUrl}
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View live on GitHub →
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {isLoading && (
        <div className={`absolute inset-0 animate-pulse rounded-sm bg-steel/10 ${skeletonHeightClass}`} />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-90"} transition-opacity duration-300`}
        loading="lazy"
        unoptimized // Bypass Next.js image optimization which blocks external SVGs by default
        onLoad={() => setIsLoading(false)}
        onError={() => setIsError(true)}
      />
    </div>
  );
}

export function GitHubSectionClient({ repos, profile }: GitHubSectionProps) {
  return (
    <section id="github" className="relative section-padding pb-32" aria-labelledby="github-heading">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal stagger={0.1}>
          <RevealItem>
            <SectionHeading
              number="07"
              label="GitHub"
              title="Open source activity"
              subtitle={`@${githubConfig.username} · contribution graph & recent repos`}
              className="mb-12"
            />
          </RevealItem>

          <RevealItem>
            <div className="glass-panel mb-8 overflow-hidden rounded-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-glass-border px-4 py-3 md:px-6">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-sm font-mono text-sm text-accent hover:underline"
                  data-cursor="hover"
                >
                  github.com/{githubConfig.username}
                </a>
                {profile && (
                  <div className="flex gap-4 font-mono text-[10px] text-steel">
                    <span>{profile.public_repos} repos</span>
                    <span>{profile.followers} followers</span>
                    <span>{profile.following} following</span>
                  </div>
                )}
              </div>

              <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6">
                <div className="overflow-x-auto">
                  <p className="mono-label mb-3">Contribution Graph</p>
                  <GraphImage
                    src={githubConfig.contributionChartUrl}
                    alt={`GitHub contribution graph for ${githubConfig.username}`}
                    width={800}
                    height={120}
                    className="h-auto w-full min-w-[600px]"
                    skeletonHeightClass="h-[120px]"
                  />
                </div>
                <div className="overflow-x-auto">
                  <p className="mono-label mb-3">Activity Timeline</p>
                  <GraphImage
                    src={githubConfig.activityGraphUrl}
                    alt={`GitHub activity graph for ${githubConfig.username}`}
                    width={800}
                    height={200}
                    className="h-auto w-full rounded-sm"
                    skeletonHeightClass="h-[200px]"
                  />
                </div>
              </div>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="mb-6 flex items-center justify-between">
              <p className="mono-label">Recent Repositories</p>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-sm font-mono text-[10px] tracking-wider text-steel hover:text-accent"
                data-cursor="hover"
              >
                VIEW ALL →
              </a>
            </div>

            {repos.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            ) : (
              <div className="glass-panel rounded-sm p-8 text-center">
                <p className="font-mono text-sm text-[rgba(220,218,240,0.8)]">
                  Unable to load repositories.{" "}
                  <a
                    href={siteConfig.githubUrl}
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit GitHub profile →
                  </a>
                </p>
              </div>
            )}
          </RevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
