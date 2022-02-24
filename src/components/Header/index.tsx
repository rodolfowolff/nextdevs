import { SectionHeader, SectionArticle } from './styles'

const Header = ({
  content: { text = '' },
  subtitle = '',
  backgroundURL = '',
}) => (
  <SectionHeader hasBackground={!!backgroundURL} bg={backgroundURL}>
    <SectionArticle>
      <h1>{text.replace(/(\r\n|\n|\r)/gm, '')}</h1>
      <h2>{subtitle}</h2>
    </SectionArticle>
  </SectionHeader>
)

export default Header
