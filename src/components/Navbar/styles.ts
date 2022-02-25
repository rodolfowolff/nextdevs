import styled, { css } from 'styled-components'

type NavMenuType = {
  isOpen: boolean
}

export const NavbarContainer = styled.header<NavMenuType>`
  width: 90%;
  margin: 0 auto;
  max-width: 1860px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 768px;
    position: relative;
    height: ${({ isOpen }) => (isOpen ? '100vh' : '115px')};
  }
`

export const Nav = styled.nav<NavMenuType>`
  display: flex;
  margin: 1rem 0;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
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
    font-size: ${props => props.theme.font.size.xxlg};
    font-family: ${props => props.theme.font.familyHeading};
  }

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
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

type NavLinkType = {
  isCurrent: boolean
}

export const NavLink = styled.a<NavLinkType>`
  cursor: pointer;
  font-size: ${props => props.theme.font.size.sm};
  font-weight: 400;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  border: 1px solid transparent;
  transition: color ${props => props.theme.transitionTime};

  &:hover {
    color: ${props => props.theme.color.secondary};
    border-bottom: 1px solid ${props => props.theme.color.secondary};
    transition: color ${props => props.theme.transitionTime};
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
