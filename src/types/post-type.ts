export type PostsProps = {
  title: string
  excerpt: string
  image: string
  slug: string
  tags: string[]
  coverImage: {
    url: string
  }
  publishedAt: string
}

export interface HomePageProps extends PostsProps {
  page: {
    content: {
      text: string
    }
    subtitle: string
    backgroundURL: string
  }
  posts: PostsProps[]
}
