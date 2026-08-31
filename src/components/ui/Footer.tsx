import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line/60 bg-panel/85 backdrop-blur-md px-6 py-10 md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold text-text">Let&apos;s build reliable, automated systems.</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-block font-body text-base text-text-muted transition-colors duration-300 hover:text-signal"
          >
            {profile.email}
          </a>
        </div>
        <div className="flex gap-6 font-body text-sm text-text-muted">
          <a href={profile.links.linkedin} className="hover:text-text transition-colors" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={profile.links.github} className="hover:text-text transition-colors" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-line/60 pt-6">
        <p className="font-data text-[11px] text-text-faint">
          © {new Date().getFullYear()} {profile.name} · AI & Automation Engineer · Mannheim, Germany
        </p>
        <p className="font-data text-[11px] text-verify">
          Available for Junior & Full-Time Roles
        </p>
      </div>
    </footer>
  );
}
