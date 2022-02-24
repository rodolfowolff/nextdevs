import { HomePageProps } from '../../templates/Home'
import { PostPreview } from '../PostPreview'

import { Wrapper } from './styles'

type MostPopularProps = {
  posts: HomePageProps[]
}

export const MostPopular = ({ posts }): MostPopularProps => (
  <Wrapper aria-label="Publicações em alta">
    {posts.map(post => (
      <PostPreview key={post.slug} {...post} />
    ))}
  </Wrapper>
)
