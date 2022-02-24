import { Section } from './styles'

type ArticleType = {
  children: React.ReactNode
}

export const SectionMain = ({ children }: ArticleType) => (
  <Section aria-label="Publicações mais recentes">{children}</Section>
)
