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
  metadataBase: new URL("https://nehal-qadeer.github.io"),
  title: "Nehal Qadeer — AI & Automation Engineer",
  description:
    "M.Sc. Applied Computer Science graduate from SRH Heidelberg. I design high-throughput Python scraping engines, optimize Computer Vision inference (-30% latency via OpenVINO), and build bulletproof automations that run reliably in production.",
  authors: [{ name: "Nehal Qadeer", url: "https://nehal-qadeer.github.io" }],
  openGraph: {
    title: "Nehal Qadeer — AI & Automation Engineer",
    description:
      "M.Sc. Applied Computer Science graduate from SRH Heidelberg. I design high-throughput Python scraping engines, optimize Computer Vision inference, and build bulletproof automations.",
    url: "https://nehal-qadeer.github.io",
    siteName: "Nehal Qadeer",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nehal Qadeer — AI & Automation Engineer",
    description:
      "M.Sc. Applied Computer Science graduate from SRH Heidelberg. I design high-throughput Python scraping engines, optimize Computer Vision inference, and build bulletproof automations."
  }
};

export const viewport: Viewport = {
  themeColor: "#EDF1F6",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${data.variable}`}>
      <body className="bg-bg font-body text-ink antialiased selection:bg-signal selection:text-white relative">
        <BlueprintParticleCanvas />
        <Nav />
        <main className="relative z-10">{children}</main>
        <ContactFooter />
      </body>
    </html>
  );
}
