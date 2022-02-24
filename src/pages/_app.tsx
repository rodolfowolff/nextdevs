import { Provider } from 'urql'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import GlobalStyles from '@styles/global'
import theme from '@styles/theme'
import { ThemeProvider as Style } from 'styled-components'

import { DefaultSeo } from '@components/seo/default-seo'
import { client, ssrCache } from '../lib/urql'

function App({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <Provider value={client}>
      <ThemeProvider defaultTheme="dark">
        <Style theme={theme}>
          <GlobalStyles />
          <DefaultSeo />
          <Component {...pageProps} />
        </Style>
      </ThemeProvider>
    </Provider>
  )
}

export default App
