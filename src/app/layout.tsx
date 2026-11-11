import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/ui/Nav";
import { ContactFooter } from "@/components/ui/ContactFooter";
import { BlueprintParticleCanvas } from "@/components/canvas/BlueprintParticleCanvas";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap"
});

const data = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-data",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nehal-portfolio-one.vercel.app"),
  title: "Nehal Qadeer | AI & Automation Engineer",
  description:
    "AI & Automation Engineer with an M.Sc. in Applied Computer Science (SRH Heidelberg). I build GenAI applications, AI agents, computer vision and workflow automations in Python.",
  authors: [{ name: "Nehal Qadeer", url: "https://nehal-portfolio-one.vercel.app" }],
  openGraph: {
    title: "Nehal Qadeer | AI & Automation Engineer",
    description:
      "AI & Automation Engineer with an M.Sc. in Applied Computer Science (SRH Heidelberg). I build GenAI applications, AI agents, computer vision and workflow automations in Python.",
    url: "https://nehal-portfolio-one.vercel.app",
    siteName: "Nehal Qadeer",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nehal Qadeer | AI & Automation Engineer",
    description:
      "AI & Automation Engineer with an M.Sc. in Applied Computer Science (SRH Heidelberg). I build GenAI applications, AI agents, computer vision and workflow automations in Python."
  }
};

export const viewport: Viewport = {
  themeColor: "#F4F6F8",
  width: "device-width",
  initialScale: 1
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nehal Qadeer",
  jobTitle: "AI & Automation Engineer",
  address: "Mannheim, Germany",
  alumniOf: "SRH Hochschule Heidelberg",
  url: "https://nehal-portfolio-one.vercel.app",
  sameAs: [
    "https://www.linkedin.com/in/nehalqadeer",
    "https://github.com/Nehal-qadeer"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${data.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                  var meta = document.querySelector('meta[name="theme-color"]');
                  if (meta) meta.setAttribute('content', theme === 'dark' ? '#22272E' : '#F4F6F8');
                } catch(e) {}
              })();
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg font-body text-ink antialiased selection:bg-signal selection:text-signal-ink relative">
        <ThemeProvider>
          <BlueprintParticleCanvas />
          <Nav />
          <main className="relative z-10">{children}</main>
          <ContactFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
