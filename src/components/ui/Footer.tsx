import Link from "next/link";
import { profile } from "@/data/profile";
import { Sparkles, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/80 bg-graphite px-6 py-12 md:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Rights */}
        <div className="space-y-1 text-center md:text-left">
          <p className="font-display text-lg font-bold text-bone">
            Nehal Qadeer
            <span className="text-amber font-normal ml-2 font-mono text-xs">
              AI & Automation Engineer
            </span>
          </p>
          <p className="font-mono text-xs text-ash-dark">
            Mannheim, Germany · Available for Junior & Full-Time Roles
          </p>
        </div>

        {/* 2-Page Links & Socials */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-body text-xs text-ash">
          <Link href="/" className="hover:text-amber transition-colors">
            Engineering
          </Link>
          <Link href="/story" className="hover:text-amber transition-colors">
            The Journey & Philosophy
          </Link>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Required Attribution */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-charcoal/50 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-ash-dark text-center sm:text-left">
        <p>
          © {new Date().getFullYear()} Nehal Qadeer. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5 text-ash">
          <Sparkles size={11} className="text-amber" />
          <span>This portfolio was created from scratch with the help of Claude and Antigravity.</span>
        </p>
      </div>
    </footer>
  );
}
