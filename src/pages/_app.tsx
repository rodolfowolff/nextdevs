import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import { DefaultSeo } from '@components/seo/default-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <DefaultSeo />
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  )
}

export default MyApp
