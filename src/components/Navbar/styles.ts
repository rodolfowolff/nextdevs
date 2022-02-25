import styled, { css, DefaultTheme } from 'styled-components'

type NavMenuType = {
  isOpen: boolean
}

export const NavbarContainer = styled.header<NavMenuType>`
  width: 80%;
  margin: 0 auto;
  max-width: 1860px;

  @media (max-width: 860px) {
    width: 100%;
    max-width: 860px;
    position: relative;
    height: ${({ isOpen }) => (isOpen ? '100vh' : '115px')};
  }
`

export const Nav = styled.nav<NavMenuType>`
  display: flex;
  margin: 1rem 0;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 860px) {
    align-items: ${({ isOpen }) => (isOpen ? 'center' : 'flex-start')};
    margin: 0;
  }
`

export const NavLogo = styled.a<NavMenuType>`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: ${props => props.theme.font.size.lg};
  font-weight: ${props => props.theme.font.weight.normal};
  text-align: center;
  background: ${props => props.theme.lineargradient.text};
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    font-weight: ${props => props.theme.font.weight.bd};
    font-size: ${props => props.theme.font.size.huge};
    font-family: ${props => props.theme.font.familyHeading};
  }

  @media (max-width: 860px) {
    font-size: 1.1rem;
    margin: 8px 10px 0;
    width: ${({ isOpen }) => (isOpen ? '50%' : '40%')};
    transition: all ${props => props.theme.transitionTime};
  }
`

export const NavMenu = styled.div<NavMenuType>`
  display: flex;
  width: 80%;
  justify-content: space-between;
  transition: all ${props => props.theme.transitionTime};

  @media (max-width: 860px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: ${({ isOpen }) => (isOpen ? '50%' : '80%')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    background-color: ${({ isOpen }) => (isOpen ? '#36A5F0' : 'none')};
  }
`

export const NavUl = styled.ul<NavMenuType>`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 860px) {
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  }
`

export const NavLi = styled.ul`
  margin: 8px 0;

  @media (min-width: 460px) {
    margin: 17px 0;
  }
`

type NavLinkType = {
  isCurrent: boolean
}

const bottomLine = (theme: DefaultTheme) => css`
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.lineargradient.secondary};
    margin-top: 8px;
    bottom: 0;
    left: 0;
  }
`

export const NavLink = styled.a<NavLinkType>`
  ${({ theme, isCurrent }) => css`
    cursor: pointer;
    font-size: ${props => props.theme.font.size.md};
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: center;
    text-decoration: none;
    border: 1px solid transparent;
    transition: color ${props => props.theme.transitionTime};
    position: relative;

    ${isCurrent && bottomLine(theme)};

    &:hover,
    &:active,
    &:focus {
      ${bottomLine(theme)}
    }
  `}
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

  @media (max-width: 860px) {
    display: flex;
    position: absolute;
    top: 15px;
    right: 20px;
  }
`
