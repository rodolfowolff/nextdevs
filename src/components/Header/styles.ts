import styled, { css, DefaultTheme } from 'styled-components'

type MainType = {
  hasBackground: boolean
  bg: string
}

const mainModifier = {
  addBackground: (theme: DefaultTheme, bg: string) => css`
    height: 195px;
    background: url(${bg}) no-repeat center;
    background-size: cover;
    justify-content: center;
    position: relative;
    padding-left: ${theme.spacing.md};

    > div {
      z-index: 2;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(90deg, #13131f 0%, rgba(19, 19, 31, 0) 100%);
      z-index: 1;
    }
  `,
}

export const SectionHeader = styled.article<MainType>`
  ${({ theme, hasBackground, bg }) => css`
    height: 17rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${hasBackground && mainModifier.addBackground(theme, bg)}

    h1 {
      width: 100%;
      max-width: 32rem;
      font-size: ${theme.font.size.xxlg};
      font-weight: ${theme.font.weight.bd};
    }

    h2 {
      width: 100%;
      max-width: 50rem;
      font-size: ${theme.font.size.md};
      font-weight: ${theme.font.weight.md};
      margin-top: ${theme.spacing.md};
    }

    @media (max-width: 768px) {
      height: 22rem;

      h1 {
        font-size: ${theme.font.size.xlg};
        font-weight: ${theme.font.weight.bd};
      }

      h2 {
        font-size: ${theme.font.size.sm};
        font-weight: ${theme.font.weight.md};
      }
    }

    @media (max-width: 480px) {
      height: 16rem;
    }
  `}
`

export const SectionArticle = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing.md} 0;

    @media (max-width: 768px) {
      margin: ${theme.spacing.sm} 0;
    }
  `}
`
