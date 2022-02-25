import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ThemeSwitch from '@components/ThemeSwitch'
import { MdVerticalDistribute, MdHorizontalDistribute } from 'react-icons/md'

import {
  Hamburger,
  Nav,
  NavbarContainer,
  NavLi,
  NavLink,
  NavLogo,
  NavMenu,
  NavUl,
} from './styles'

const Navbar = () => {
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavbarContainer isOpen={isOpen}>
      <Nav isOpen={isOpen}>
        <Link href="/" passHref>
          <NavLogo
            isOpen={isOpen}
            href="/"
            aria-label="Voltar para página inicial"
          >
            XA<span>BLAU</span>
          </NavLogo>
        </Link>
        <NavMenu isOpen={isOpen}>
          <NavUl isOpen={isOpen}>
            <NavLi>
              <Link href="/" passHref>
                <NavLink isCurrent={pathname === '/'}>Home</NavLink>
              </Link>
            </NavLi>
            <NavLi>
              <Link href="/tecnologias" passHref>
                <NavLink isCurrent={pathname === '/tecnologias'}>
                  Tecnologias
                </NavLink>
              </Link>
            </NavLi>
            <NavLi>
              <Link href="/noticias" passHref>
                <NavLink isCurrent={pathname === '/noticias'}>Notícias</NavLink>
              </Link>
            </NavLi>
            <NavLi>
              <Link href="/dicas" passHref>
                <NavLink isCurrent={pathname === '/dicas'}>Dicas</NavLink>
              </Link>
            </NavLi>
          </NavUl>
          <ThemeSwitch />
        </NavMenu>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <MdHorizontalDistribute size={25} />
          ) : (
            <MdVerticalDistribute size={25} />
          )}
        </Hamburger>
      </Nav>
    </NavbarContainer>
  )
}
export default Navbar
