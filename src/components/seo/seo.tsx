import { NextSeo, NextSeoProps } from 'next-seo'

interface SEOProps extends NextSeoProps {
  title?: string
  description?: string
  path: string
}

const Seo = ({ title, description, path, ...rest }: SEOProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${path}`,
        title,
        description,
        site_name: 'Xablau',
      }}
      {...rest}
    />
  )
}

export default Seo
