import type { NextPage } from 'next'

import Seo from '@components/seo/seo'
import Navbar from '@components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Página inicial | NextDevs"
        description="NextDevs é um blog sobre desenvolvimento de software, com foco em tecnologias como React, Next.js, Node, GraphQL, Javascript e outras tecnologias."
        path="/"
      />

      <Navbar />

      <h1>Página inicial</h1>

    </>
  )
}

export default Home
