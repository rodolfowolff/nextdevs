import { PostsProps } from 'src/types/post-type'
import { Heading } from '../Heading'
import { Thumb } from '../Thumb'

import { Wrapper } from './styles'

type LatestPostsProps = {
  posts: PostsProps[]
}

export const LatestPosts = ({ posts }: LatestPostsProps) => (
  <Wrapper aria-label="Últimas atualizações">
    <Heading>Mais populares</Heading>
    <div>
      {posts.map(post => (
        <Thumb
          key={post.slug}
          slug={post.slug}
          tagText={post.tags[0]}
          backgroundURL={post.coverImage.url}
          size="normal"
          orientation="portrait"
          description={post.excerpt}
        />
      ))}
    </div>
  </Wrapper>
)
