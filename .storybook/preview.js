import "./global.css"
import { themes } from "@storybook/theming"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: "dark",
    dark: { ...themes.dark, appBg: "#1c1c1d" },
    light: { ...themes.normal, appBg: "#f5f5f5" }
  }
}