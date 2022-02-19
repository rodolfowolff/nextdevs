import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import GlobalStyles from '@styles/global'
import { ThemeProvider as Style } from 'styled-components'

import { DefaultSeo } from '@components/seo/default-seo'
import Navbar from '@components/Navbar'
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <Style theme={theme}>
          <GlobalStyles />
          <DefaultSeo />

          <Navbar />
          <Component {...pageProps} />
        </Style>
      </ThemeProvider>
    </>
  )
}
