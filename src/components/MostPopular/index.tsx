import { PostsProps } from 'src/types/post-type'
import { PostPreview } from '../PostPreview'

import { Wrapper } from './styles'

type MostPopularProps = {
  posts: PostsProps[]
}

export const MostPopular = ({ posts }: MostPopularProps) => (
  <Wrapper aria-label="Publicações populares">
    {posts.map(post => (
      <PostPreview key={post.slug} {...post} />
    ))}
  </Wrapper>
)
