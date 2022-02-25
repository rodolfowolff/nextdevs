import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: ${theme.spacing.xsm};
    margin-bottom: ${theme.spacing.xlg};
    height: 100%;

    @media (max-width: 860px) {
      display: block;
      grid-template-columns: 1fr;
      gap: ${theme.spacing.md};
    }

    @media (max-width: 1360px) {
      display: grid;
      grid-template-columns: 2fr;
    }
  `}
`
