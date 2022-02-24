import { DefaultSeo as NextDefaultSeo } from 'next-seo'
import { siteSettings } from '@settings/site-settings'

export const DefaultSeo = () => {
  return (
    <NextDefaultSeo
      title={siteSettings.name}
      titleTemplate={`${siteSettings.name} | %s`}
      defaultTitle={siteSettings.name}
      description={siteSettings.description}
      canonical="https://Xablaublog.vercel.app/"
      openGraph={{
        type: 'website',
        locale: 'pt_BR',
        site_name: siteSettings.name,
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1 maximum-scale=1',
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'apple-touch-icon',
          href: 'icons/apple-icon-180.png',
        },
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
      ]}
    />
  )
}
