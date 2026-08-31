import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line px-6 py-32 md:px-10 lg:pl-24">
      <p className="font-data text-xs tracking-widest text-text-faint">CONTACT</p>

      <h2 className="mt-6 max-w-3xl font-display text-display-2 font-medium leading-[1.05] text-text">
        Have a system that needs building, or one that&apos;s already breaking?
      </h2>

      <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-signal px-7 py-3 font-body text-sm font-medium text-ink transition-transform duration-300 ease-signal hover:scale-[1.03]"
        >
          Email me directly
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="font-body text-sm text-text-muted underline-offset-4 hover:text-text hover:underline"
        >
          Or find me on LinkedIn
        </a>
      </div>

      <p className="mt-10 font-data text-xs tabular text-text-faint">{profile.phone} · {profile.location}</p>
    </section>
  );
}
