import Header from '@components/Header'
import { LatestPosts } from '@components/LatestPosts'
import { MostPopular } from '@components/MostPopular'
import { RecommendedPosts } from '@components/RecommendedPosts'
import { SectionMain } from '@components/SectionMain'
import { Thumb } from '@components/Thumb'
import { HomePageProps } from 'src/types/post-type'
import { Base } from '../Base'
import { Grid } from './styles'

const SECTIONS_CONFIGS = [
  {
    tag: 'news',
    size: 3,
  },
  {
    tag: 'most-popular',
    size: 8,
  },
  {
    tag: 'latest',
    size: 3,
  },
  // {
  //   tag: 'recommended',
  //   size: 6,
  // },
]

export const HomePage = ({ page, posts }: HomePageProps) => {
  return (
    <>
      <Base>
        <Header {...page} />
        <SectionMain>
          {SECTIONS_CONFIGS.map(
            section =>
              section.tag === 'news' &&
              posts
                .slice(0, 1)
                .filter(post => post.tags.includes('news'))
                .map(post => (
                  <Thumb
                    key={post.slug}
                    tagText={post.tags[0]}
                    description={post.excerpt}
                    backgroundURL={post.coverImage.url}
                    size="large"
                    orientation="landscape"
                    slug={post.slug}
                  />
                ))
          )}
          <div className="right-side">
            {SECTIONS_CONFIGS.map(
              section =>
                section.tag === 'news' &&
                posts
                  .slice(1, 3)
                  .filter(post => post.tags.includes('news'))
                  .map(post => (
                    <Thumb
                      key={post.slug}
                      tagText={post.tags[0]}
                      description={post.excerpt}
                      backgroundURL={post.coverImage.url}
                      size="small"
                      orientation="landscape"
                      slug={post.slug}
                    />
                  ))
            )}
          </div>
        </SectionMain>
        <Grid>
          <LatestPosts posts={Object.values(posts.slice(0, 6))} />
          <MostPopular posts={Object.values(posts.slice(0, 4))} />
        </Grid>

        <RecommendedPosts posts={Object.values(posts.slice(0, 3))} />
      </Base>
    </>
  )
}

export default HomePage
