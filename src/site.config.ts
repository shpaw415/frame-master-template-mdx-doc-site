/**
 * Site Configuration
 * Update these values to customize your documentation site.
 */
export const siteConfig = {
  /** The name of your project/site */
  name: "My Documentation",

  /** Short description of your project */
  description: "Documentation site built with Frame Master",

  /** The base URL of your site (used for SEO and social sharing) */
  url: "https://example.com",

  /** Author information */
  author: {
    name: "Your Name",
    url: "https://github.com/yourusername",
    email: "your@email.com",
  },

  /** Social links displayed in the header/footer */
  links: {
    github: "https://github.com/yourusername/your-repo",
    twitter: "https://twitter.com/yourusername",
    discord: "", // Leave empty to hide
  },

  /** Navigation items for the header */
  nav: [
    { label: "Home", href: "/" },
    { label: "Showcase", href: "/showcase" },
  ],

  /** Footer navigation sections */
  footer: {
    sections: [
      {
        title: "Documentation",
        links: [
          { label: "Getting Started", href: "/docs/getting-started" },
          { label: "Installation", href: "/docs/installation" },
          { label: "Configuration", href: "/docs/configuration" },
        ],
      },
      {
        title: "Community",
        links: [
          {
            label: "GitHub",
            href: "https://github.com/yourusername/your-repo",
          },
          { label: "Discord", href: "#" },
          { label: "Twitter", href: "https://twitter.com/yourusername" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Your Project. All rights reserved.`,
  },

  /** Theme configuration */
  theme: {
    /** Default theme: "light", "dark", or "system" */
    defaultTheme: "system" as "light" | "dark" | "system",

    /** Accent color used for links, buttons, etc. */
    accentColor: "#3b82f6", // blue-500

    /** Dark theme colors */
    dark: {
      background: "#0a0a0a",
      foreground: "#fafafa",
      muted: "#a1a1aa",
      border: "#27272a",
      card: "#18181b",
      cardHover: "#27272a",
    },

    /** Light theme colors */
    light: {
      background: "#ffffff",
      foreground: "#0a0a0a",
      muted: "#71717a",
      border: "#e4e4e7",
      card: "#f4f4f5",
      cardHover: "#e4e4e7",
    },
  },

  /** SEO defaults */
  seo: {
    titleTemplate: "%s | My Documentation",
    defaultTitle: "My Documentation",
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "My Documentation",
    },
  },
} as const;

/** Type exports for TypeScript support */
export type SiteConfig = typeof siteConfig;
export type NavItem = (typeof siteConfig.nav)[number];
export type FooterSection = (typeof siteConfig.footer.sections)[number];
export type ThemeMode = "light" | "dark" | "system";
