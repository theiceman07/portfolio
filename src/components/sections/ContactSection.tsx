"use client";

import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";

export function ContactSection() {
  const mailtoLink = `mailto:${siteConfig.email}?subject=Hello%20Arjun&body=Hi%20Arjun%2C%0A%0A`;

  return (
    <section id="contact" className="relative section-padding pb-40" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <RevealItem>
            <SectionHeading
              number="09"
              label="Contact"
              title={
                <>
                  Let&apos;s build something{" "}
                  <span className="text-accent">data-driven</span>
                </>
              }
              subtitle="Open to internships, collaborations, and conversations at the intersection of finance, technology, and AI."
              className="mb-12"
            />
          </RevealItem>

          <RevealItem>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact links */}
              <div className="glass-panel rounded-sm p-8">
                <p className="mono-label mb-6">Direct</p>
                <ul className="space-y-5">
                  <li>
                    <p className="mono-label mb-1">Email</p>
                    <a
                      href={mailtoLink}
                      className="focus-ring rounded-sm font-mono text-sm text-foreground transition-colors hover:text-accent"
                      data-cursor="hover"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <p className="mono-label mb-1">GitHub</p>
                    <a
                      href={siteConfig.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring rounded-sm font-mono text-sm text-foreground transition-colors hover:text-accent"
                      data-cursor="hover"
                    >
                      @{siteConfig.github}
                    </a>
                  </li>
                  <li>
                    <p className="mono-label mb-1">LinkedIn</p>
                    <a
                      href={siteConfig.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring rounded-sm font-mono text-sm text-foreground transition-colors hover:text-accent"
                      data-cursor="hover"
                    >
                      Connect on LinkedIn →
                    </a>
                  </li>
                  <li>
                    <p className="mono-label mb-1">Location</p>
                    <p className="font-mono text-sm text-[rgba(220,218,240,0.9)]">{siteConfig.location}</p>
                  </li>
                </ul>

                <div className="mt-12 rounded-sm border border-glass-border bg-background/50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-foreground">CURRENT STATUS</span>
                  </div>
                  <p className="font-mono text-xs text-[rgba(220,218,240,0.7)] leading-relaxed">
                    Actively exploring quantitative finance, ML, and software engineering internship opportunities for 2026.
                  </p>
                </div>


              </div>

              {/* Simple mailto form */}
              <div className="glass-panel rounded-sm p-8">
                <p className="mono-label mb-6">Send a message</p>
                <form
                  action={mailtoLink}
                  method="GET"
                  encType="text/plain"
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="contact-name" className="mono-label mb-2 block">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="from"
                      type="text"
                      required
                      className="focus-ring w-full rounded-sm border border-glass-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/25"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="mono-label mb-2 block">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      className="focus-ring w-full rounded-sm border border-glass-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/25"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-body" className="mono-label mb-2 block">
                      Message
                    </label>
                    <textarea
                      id="contact-body"
                      name="body"
                      rows={4}
                      required
                      className="focus-ring w-full resize-none rounded-sm border border-glass-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/25"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="focus-ring w-full rounded-sm border border-accent/30 py-3 font-mono text-xs tracking-wider text-accent transition-colors hover:bg-accent-muted"
                    data-cursor="hover"
                  >
                    SEND VIA EMAIL →
                  </button>
                </form>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="mt-20">
            <p className="font-mono text-[10px] tracking-wider text-foreground/40 text-heading-shadow">
              © 2026 {siteConfig.name}. Built with Next.js · GSAP · Framer Motion
            </p>
          </RevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
