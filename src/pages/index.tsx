import type { NextPage } from 'next'
import Seo from '@components/seo/seo'

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Página inicial | NextDevs"
        description="NextDevs é um blog sobre desenvolvimento de software, com foco em tecnologias como React, Next.js, Node, GraphQL, Javascript e outras tecnologias."
        path="/"
      />
      <div>
        <h1>conteudo do blog</h1>
      </div>
    </>
  )
}

export default Home
