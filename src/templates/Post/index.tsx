import Image from 'next/image'
import { Base } from '../Base'
import { Heading } from '../../components/Heading'
import { PostsProps, HomePageProps } from '../../types/post-type'
import { Summary, Content, PublishedAt } from './styles'
// import { Thumb } from '@components/Thumb'
import { RecommendedPosts } from '@components/RecommendedPosts'
import { Tag } from '@components/Thumb/styles'

export const PostTemplate = ({ post, posts }: any) => {
  return (
    <Base>
      {post && posts && (
        <>
          <Heading>{post.title}</Heading>
          {
            <Image
              src={post.coverImage.url}
              alt={post.title}
              width={1200}
              height={600}
            />
          }
          <div>
            <Summary>{post.excerpt}</Summary>
            <PublishedAt>
              {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
            </PublishedAt>
            <Content dangerouslySetInnerHTML={{ __html: post.content.html }} />
            {post.tags.map((tag: string) => (
              <Tag
                key={tag}
                size={'normal'}
                style={{ display: 'flex', padding: 10 }}
              >
                {tag}
              </Tag>
            ))}
          </div>
          <RecommendedPosts posts={posts} />
        </>
      )}
    </Base>
  )
}
