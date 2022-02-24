import { HomePageProps } from '../../templates/Home'
import { Heading } from '../Heading'
import { Thumb } from '../Thumb'

import { Wrapper } from './styles'

type LatestPostsProps = {
  posts: HomePageProps[]
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

// coverImage: {url: 'https://media.graphcms.com/resize=height:400,width:400/UcUf3B79QKjSSdURICWL', __typename: 'Asset'}
// excerpt: "Learn more about Polymorphic Relations and Sortable Relations with GraphCMS"
// publishedAt: "2022-02-24T00:53:03.321847+00:00"
// slug: "union-types-and-sortable-relations"
// tags: ['news']
// title: "Partiu?"
