import Link from 'next/link'

// import { PostProps } from '../../templates/Home'
// import { CustomLink } from '../CustomLink'
// import { SROnly } from '../SROnly'
import { Thumb } from '../Thumb'

import { Wrapper, Info, WrapperButton } from './styles'

// type PostPreviewProps = PostProps

export const PostPreview = ({
  tags,
  coverImage,
  slug,
  title,
  excerpt,
  publishedAt,
}) => (
  <Wrapper>
    <Thumb
      tagText={tags[0]}
      backgroundURL={coverImage.url}
      size="small"
      orientation="portrait"
      slug={slug}
    />
    <Info aria-labelledby={`info-${slug}`}>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <time>
        <p>publicado em: </p>{' '}
        {new Date(publishedAt).toLocaleDateString('pt-BR')}
      </time>
      <WrapperButton>
        {/* <CustomLink size="small" url={slug} id={`info-${slug}`}>
          Ler notícia <SROnly> {title}</SROnly>
        </CustomLink> */}
      </WrapperButton>
    </Info>
  </Wrapper>
)
