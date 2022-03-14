import { ThemeProvider } from 'next-themes';

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
