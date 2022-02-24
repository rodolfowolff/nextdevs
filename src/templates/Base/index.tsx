import Navbar from '@components/Navbar'
import { Container } from './styles'

type BaseTemplateType = {
  children: React.ReactNode
  hideFooter?: boolean
}

export const Base = ({ children, hideFooter = false }: BaseTemplateType) => {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  )
}
