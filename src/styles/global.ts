import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  ${({ theme }) => css`
    :root {
      background: ${theme.color.white};
      color: ${theme.color.dark};
      transition: all ${props => props.theme.transitionTime};
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${theme.color.dark};
      }

      ul {
        color: ${theme.color.dark};
      }

      a {
        color: ${theme.color.dark};
      }
    }

    [data-theme='dark'] {
      background: ${theme.color.dark};
      color: ${theme.color.white};
      transition: all ${props => props.theme.transitionTime};
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${theme.color.white};
      }

      ul {
        color: ${theme.color.white};
      }

      a {
        color: ${theme.color.white};
      }
    }

    body {
      font-family: ${theme.font.familyBody};
      font-size: ${theme.font.size.md};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.font.familyHeading};
    }

    a,
    button {
      cursor: pointer;
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
    }
  `}
`

export default GlobalStyles
