import styled, { css } from 'styled-components'

export const MarkdownStyle = styled.div`
  ${({ theme }) => css`
    /* & ul,
    & ol {
      padding-left: ${theme.spacing.sm};
      & li {
        line-height: ${theme.font.size.lg};
      },
    } */

    a {
      color: ${theme.color.turquoise};
      font-weight: bold;
      text-decoration: none;
      border-bottom: 1px solid ${theme.color.secondary};
    }

    a:hover {
      border-bottom: 1px solid ${theme.color.blue};
    }

    /* h1 {
      font-size: ${theme.font.size.lg};
      font-weight: ${theme.font.weight.bd};
      margin-top: ${theme.spacing.md};
      margin-bottom: ${theme.spacing.sm};
    } */

    /* & blockquote {
      line-height: ${theme.spacing.lg};
      font-size: ${theme.font.size.huge};
      margin: ${theme.spacing.md} auto;
      position: relative;
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      border-radius: ${theme.border.radius};
      background-color: green;
      margin: ${theme.spacing.md} auto;

      & p,
      & span {
        margin-bottom: 5px;
        font-size: ${theme.font.size.md};
        color: red;
        background-color: black;
      }

      &:before {
        left: 16px;
        top: -8px;
        display: block;
        position: absolute;
        content: '"\\201C"';
      }
    } */

    & pre,
    & pre > code {
      font-size: ${theme.font.size.md};
      overflow-x: auto;
      white-space: pre;
      padding: 10px 3px 19px 14px;
      color: ${theme.color.blue}; //cor da letra do codigo
      border-radius: ${theme.border.radius};
      background-color: ${theme.color.darkGray}; //cor do fundo do codigo
      margin: ${theme.spacing.xsm} auto;
    }

    & code {
      font-size: ${theme.font.size.md};
      /* border-radius: ${theme.border.radius}; */
      /* white-space: pre; */
      padding: 3px 4px 3px 0px !important;
      line-height: 22px;
      color: ${theme.color.lightBlue}; //cor da letra do codigo
      &.hljs {
        background-color: transparent;
        padding: 0;
      }
    }
  `};
`
