import { PostsProps } from 'src/types/post-type'
import { PostPreview } from '../PostPreview'

import { Wrapper } from './styles'

type LatestPostsProps = {
  posts: PostsProps[]
}

export const LatestPosts = ({ posts }: LatestPostsProps) => (
  <Wrapper aria-label="Publicações populares">
    {posts.map(post => (
      <PostPreview key={post.slug} {...post} />
    ))}
  </Wrapper>
)
