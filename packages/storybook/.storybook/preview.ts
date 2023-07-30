import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from 'component-library'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles, // Adds your GlobalStyle component to all stories
      defaultTheme: 'default',
      themes: {
        default: theme,
      },
      Provider: ThemeProvider,
    }),
  ],
}

export default preview
