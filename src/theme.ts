import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#f7fee7" },
          100: { value: "#ecfccb" },
          200: { value: "#d9f99d" },
          300: { value: "#bef264" },
          400: { value: "#a3e635" },
          500: { value: "#84cc16" },
          600: { value: "#65a30d" },
          700: { value: "#4d7c0f" },
          800: { value: "#3f6212" },
          900: { value: "#365314" },
          950: { value: "#1a2e05" },
        },
        bg: {
          dark: { value: "#131318" },
          card: { value: "#1a1a24" },
        },
        text: {
          primary: { value: "#e4e1e9" },
          secondary: { value: "#a1a1aa" },
        },
      },
      fonts: {
        heading: { value: "var(--font-geist-sans), sans-serif" },
        body: { value: "var(--font-geist-sans), sans-serif" },
        mono: { value: "var(--font-geist-mono), monospace" },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          DEFAULT: { value: "{colors.brand.400}" },
          muted: { value: "{colors.brand.100}" },
          emphasis: { value: "{colors.brand.300}" },
        },
        background: {
          DEFAULT: { value: "{colors.bg.dark}" },
          subtle: { value: "{colors.bg.card}" },
        },
        foreground: {
          DEFAULT: { value: "{colors.text.primary}" },
          muted: { value: "{colors.text.secondary}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
