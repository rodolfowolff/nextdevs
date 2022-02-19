import styled, { css } from 'styled-components'

type NavMenuType = {
  isOpen: boolean
}

export const NavbarContainer = styled.div<NavMenuType>`
  height: 80px;

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    height: ${({ isOpen }) => (isOpen ? '100vh' : '40px')};
  }
`

export const Nav = styled.nav<NavMenuType>`
  display: flex;
  padding: 1rem 2rem;
  align-items: center;

  @media (max-width: 768px) {
    align-items: ${({ isOpen }) => (isOpen ? 'center' : 'flex-start')};
    padding: 0;
    transition: all ${props => props.theme.transitionTime};
  }
`

export const NavLogo = styled.a<NavMenuType>`
  font-size: ${props => props.theme.font.size.md};
  font-weight: ${props => props.theme.font.weight.normal};
  width: 20%;
  text-align: center;
  color: ${props => props.theme.color.primary};

  span {
    font-weight: ${props => props.theme.font.weight.bd};
    font-size: ${props => props.theme.font.size.lg};
    color: ${props => props.theme.color.lightOrange};
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 5px 10px 0;
    width: ${({ isOpen }) => (isOpen ? '50%' : '30%')};
    transition: all ${props => props.theme.transitionTime};
  }
`

export const NavMenu = styled.div<NavMenuType>`
  display: flex;
  width: 80%;
  justify-content: space-between;
  transition: all ${props => props.theme.transitionTime};

  @media (max-width: 768px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: ${({ isOpen }) => (isOpen ? '50%' : '80%')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    background-color: ${({ isOpen }) => (isOpen ? '#34c494' : 'none')};
  }
`

export const NavUl = styled.ul<NavMenuType>`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  }
`

export const NavLi = styled.ul`
  padding: 8px;
`

export const NavLink = styled.a`
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 400;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  border: 1px solid transparent;

  &:hover {
    color: ${props => props.theme.color.secondary};
    border-bottom: 1px solid ${props => props.theme.color.secondary};
    transition: all ${props => props.theme.transitionTime};
  }
`

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 1.6rem;
    margin-bottom: 4px;
    background-color: ${props => props.theme.color.primary};
  }

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 15px;
    right: 20px;
  }
`
