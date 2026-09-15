/**
 * Social media configuration.
 *
 * When official accounts exist, replace the empty strings with the real URLs.
 * While empty, the icons are rendered as disabled placeholders
 * (no fake profiles are exposed).
 */
export interface SocialLink {
  id: "github" | "linkedin" | "instagram";
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", href: "" },
  { id: "linkedin", label: "LinkedIn", href: "" },
  { id: "instagram", label: "Instagram", href: "" },
];
