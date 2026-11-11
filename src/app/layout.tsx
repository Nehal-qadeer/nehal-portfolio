import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/ui/Nav";
import { ContactFooter } from "@/components/ui/ContactFooter";
import { BlueprintParticleCanvas } from "@/components/canvas/BlueprintParticleCanvas";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
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
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nehal Qadeer | AI & Automation Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nehal Qadeer | AI & Automation Engineer",
    description:
      "AI & Automation Engineer with an M.Sc. in Applied Computer Science (SRH Heidelberg). I build GenAI applications, AI agents, computer vision and workflow automations in Python.",
    images: ["/og-image.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#0B1120",
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg font-body text-ink antialiased selection:bg-signal selection:text-white relative">
        <BlueprintParticleCanvas />
        <Nav />
        <main className="relative z-10">{children}</main>
        <ContactFooter />
      </body>
    </html>
  );
}
