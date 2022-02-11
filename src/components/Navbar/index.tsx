import Link from 'next/link';

import { NavbarContainer, NavbarLinks } from './styles';

const Navbar = () => (
  <NavbarContainer>

    <Link href="/">NextDevs</Link>

    <NavbarLinks>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Tecnologias</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Noticias</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Dicas</a>
          </Link>
        </li>
      </ul>
    </NavbarLinks>
  </NavbarContainer>
)

export default Navbar;
