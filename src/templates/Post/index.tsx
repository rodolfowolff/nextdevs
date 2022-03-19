import Image from 'next/image'
import { Base } from '../Base'
import { Heading } from '../../components/Heading'
import { Summary, PublishedAt } from './styles'
import Markdown from '@components/Markdown'
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
            <Markdown postContent={post.content.html} />
            <div>
              {post.tags.slice(0, 5).map((tag: string) => (
                <div key={tag}>
                  <Tag
                    size={'normal'}
                    style={{
                      display: 'flex',
                      padding: 14,
                    }}
                  >
                    {tag}
                  </Tag>
                </div>
              ))}
            </div>
          </div>
          <RecommendedPosts posts={posts} />
        </>
      )}
    </Base>
  )
}
