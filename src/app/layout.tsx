import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap"
});

const data = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-data",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.links.portfolio),
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary,
  authors: [{ name: profile.name, url: profile.links.portfolio }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    url: profile.links.portfolio,
    siteName: profile.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary
  }
};

export const viewport: Viewport = {
  themeColor: "#0B0C10",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${data.variable}`}>
      <body className="bg-obsidian font-body text-text antialiased selection:bg-cyan selection:text-obsidian">
        <SmoothScrollProvider>
          <Nav />
          <div className="pt-2">{children}</div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
