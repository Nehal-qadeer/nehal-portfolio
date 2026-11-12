import React from "react";
import { siGithub, siGmail, siWhatsapp } from "simple-icons";

// Official LinkedIn SVG path (24x24)
export const LINKEDIN_SVG_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z";

interface IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function GitHubIcon({ size = 16, className = "", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path d={siGithub.path} />
    </svg>
  );
}

export function LinkedInIcon({ size = 16, className = "", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={`text-[#0A66C2] dark:text-[#70B5F9] shrink-0 ${className}`}
      style={style}
    >
      <path d={LINKEDIN_SVG_PATH} />
    </svg>
  );
}

export function GmailIcon({ size = 20, className = "", style }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="#EA4335"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
      style={style}
    >
      <path d={siGmail.path} />
    </svg>
  );
}

export function WhatsAppIcon({
  size = 20,
  className = "",
  color = "#25D366",
  style,
}: IconProps & { color?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
      className={`shrink-0 ${className}`}
      style={style}
    >
      <path d={siWhatsapp.path} />
    </svg>
  );
}
