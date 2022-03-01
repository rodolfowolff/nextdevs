import Header from '@components/Header'
import { LatestPosts } from '@components/LatestPosts'
import { MostPopular } from '@components/MostPopular'
import { RecommendedPosts } from '@components/RecommendedPosts'
import { SectionMain } from '@components/SectionMain'
import { Thumb } from '@components/Thumb'
import { HomePageProps } from 'src/types/post-type'
import { Base } from '../Base'
import { Grid } from './styles'

function groupArrayOfObjects(list: any[], key: string) {
  return list.reduce(
    (acc: { [x: string]: any[] }, item: { [x: string]: string | number }) => {
      ;(acc[item[key]] = acc[item[key]] || []).push(item)
      return acc
    },
    {}
  )
}

function getSection(
  section: { tag: string; start: number; end: number },
  posts: HomePageProps[]
): HomePageProps[] {
  const { tag, start, end } = section
  const groupedPosts = groupArrayOfObjects(posts, 'tags')
  let sectionPosts: any[] = []
  const x = Object.keys(groupedPosts).forEach(key => {
    if (key.split(',').includes(tag)) {
      const keySplit = groupedPosts[key].slice(start, end)
      return sectionPosts.push(keySplit)
    }
  })
  return sectionPosts.flat().slice(start, end)
}

export const HomePage = ({ page, posts }: HomePageProps) => {
  return (
    <>
      <Base>
        <Header {...page} />
        <SectionMain>
          {getSection({ tag: 'novo', start: 0, end: 1 }, posts as any).map(
            post => (
              <Thumb
                key={post.slug}
                slug={post.slug}
                tagText="novo"
                backgroundURL={post.coverImage ? post.coverImage.url : ''}
                size="large"
                orientation="landscape"
                description={post.excerpt}
                pagePath={`/post/${post.slug}`}
              />
            )
          )}

          <div className="right-side">
            {getSection({ tag: 'novo', start: 1, end: 3 }, posts as any).map(
              post => (
                <Thumb
                  key={post.slug}
                  slug={post.slug}
                  tagText="novo"
                  backgroundURL={post.coverImage ? post.coverImage.url : ''}
                  size="small"
                  orientation="landscape"
                  description={post.excerpt}
                  pagePath={`/post/${post.slug}`}
                />
              )
            )}
          </div>
        </SectionMain>

        <Grid>
          <LatestPosts
            posts={getSection({ tag: 'novo', start: 3, end: 10 }, posts as any)}
          />
          <MostPopular
            posts={getSection(
              { tag: 'popular', start: 0, end: 4 },
              posts as any
            )}
          />
        </Grid>

        <RecommendedPosts
          posts={getSection(
            { tag: 'recomendado', start: 0, end: 3 },
            posts as any
          )}
        />
      </Base>
    </>
  )
}

export default HomePage
