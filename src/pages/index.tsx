import type { GetServerSideProps } from 'next'
import Seo from '@components/seo/seo'
import HomePage from 'src/templates/Home'
import { client, ssrCache } from 'src/lib/urql'
import {
  PageDocument,
  PostsDocument,
  usePostsQuery,
  usePageQuery,
} from 'src/generated/graphql'

export default function Home() {
  const [
    {
      data: { posts },
    },
  ] = usePostsQuery()
  const [
    {
      data: { page },
    },
  ] = usePageQuery({
    variables: {
      slug: 'home',
    },
  })

  return (
    <>
      {page && (
        <>
          <Seo
            title={`${page?.title}`}
            description={`${page?.subtitle}`}
            path="/"
          />
          <HomePage page={page} posts={posts} />
        </>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  await Promise.all([
    client.query(PostsDocument).toPromise(),
    client.query(PageDocument, { slug: 'home' }).toPromise(),
  ])

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  }
}
