import { CustomLink } from '@components/CustomLink'
import Link from 'next/link'
import { PostsProps } from 'src/types/post-type'
import { Thumb } from '../Thumb'

import { Wrapper, Info, WrapperButton, Text } from './styles'

export const PostPreview = ({
  tags,
  coverImage,
  slug,
  title,
  excerpt,
  publishedAt,
}: PostsProps) => (
  <Wrapper>
    <Thumb
      tagText={tags}
      backgroundURL={coverImage ? coverImage.url : ''}
      size="small"
      orientation="portrait"
      slug={slug}
      pagePath={`/post/${slug}`}
    />
    <Info aria-labelledby={`info-${slug}`}>
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <time>
        <span>
          publicado em: <br />
          {new Date(publishedAt).toLocaleDateString('pt-BR')}
        </span>
      </time>
      <WrapperButton>
        <CustomLink size="small" url={`/post/${slug}`} id={`info-${slug}`}>
          Ler notícia <Text> {title}</Text>
        </CustomLink>
      </WrapperButton>
    </Info>
  </Wrapper>
)
