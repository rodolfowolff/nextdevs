import type { NextPage } from 'next'
import Seo from '@components/seo/seo'
import TecnologiesPage from 'src/templates/Tecnologies'

const TecnologyPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Tecnologias | Xablau"
        description="Xablau é um blog sobre desenvolvimento de software, com foco em tecnologias como React, Next.js, Node, GraphQL, Javascript e outras tecnologias."
        path="/"
      />
      <TecnologiesPage />
    </>
  )
}

export default TecnologyPage
