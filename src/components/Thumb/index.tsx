import Link from 'next/link'

import { Wrapper, Tag, Preview } from './styles'

export type ThumbSizes = 'large' | 'normal' | 'small'
export type ThumbOrientations = 'landscape' | 'portrait'

type ThumbType = {
  tagText: string
  slug: string
  description?: string
  backgroundURL: string
  size: ThumbSizes
  orientation: ThumbOrientations
}

export const Thumb = ({
  tagText,
  description,
  backgroundURL,
  size,
  orientation,
  slug,
}: ThumbType) => (
  <Link href={slug} passHref>
    <Wrapper
      size={size}
      orientation={orientation}
      bg={backgroundURL}
      aria-labelledby={description ? slug : ''}
      aria-hidden={!description && 'true'}
    >
      <Tag size={size}>{tagText}</Tag>
      {description && (
        <Preview size={size} id={slug}>
          {description}
        </Preview>
      )}
    </Wrapper>
  </Link>
)
