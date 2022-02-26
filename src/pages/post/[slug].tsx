import Seo from '@components/seo/seo'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  PostDocument,
  PostsDocument,
  usePostQuery,
  usePostsQuery,
} from 'src/generated/graphql'
import { client, ssrCache } from 'src/lib/urql'
import { PostTemplate } from 'src/templates/Post'

function Post({ slug } = { slug: '' }) {
  const [
    {
      data: { post },
    },
  ] = usePostQuery({
    variables: {
      slug,
    },
  }) as [{ data: { post: any } }, any]
  const [
    {
      data: { posts },
    },
  ] = usePostsQuery() as [{ data: { posts: any } }, any]

  return (
    <>
      {post && posts && (
        <>
          <Seo
            title={`${post?.title}`}
            description={`${post?.subtitle}`}
            path="/"
          />
          <PostTemplate post={post} posts={posts} />
        </>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const slug = params.slug as string

  await Promise.all([
    client.query(PostDocument, { slug }).toPromise(),
    client.query(PostsDocument).toPromise(),
  ])

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug,
    },
    revalidate: 60 * 60 * 4, // 4 hours
  }
}

export default Post
