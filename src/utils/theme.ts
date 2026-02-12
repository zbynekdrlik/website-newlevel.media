export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  background: string;
  backgroundAlt: string;
  headerBackground?: string;
  text: string;
  textLight: string;
  textMuted: string;
}

export function generateCSSVariables(colors: ThemeColors): string {
  return `
    :root {
      --color-primary: ${colors.primary};
      --color-primary-light: ${colors.primaryLight};
      --color-primary-dark: ${colors.primaryDark};
      --color-accent: ${colors.accent};
      --color-accent-light: ${colors.accentLight};
      --color-accent-dark: ${colors.accentDark};
      --color-background: ${colors.background};
      --color-background-alt: ${colors.backgroundAlt};
      --color-header-background: ${colors.headerBackground || colors.background};
      --color-text: ${colors.text};
      --color-text-light: ${colors.textLight};
      --color-text-muted: ${colors.textMuted};
    }
  `;
}
