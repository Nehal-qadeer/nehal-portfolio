import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl text-text">Let&apos;s build something precise.</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-block font-body text-text-muted transition-colors duration-300 hover:text-signal"
          >
            {profile.email}
          </a>
        </div>
        <div className="flex gap-6 font-body text-sm text-text-muted">
          <a href={profile.links.linkedin} className="hover:text-text" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.links.github} className="hover:text-text" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <p className="mt-10 font-data text-[11px] text-text-faint">
        Architected and built from scratch with custom Three.js and React components, accelerated via Claude AI.
      </p>
    </footer>
  );
}
