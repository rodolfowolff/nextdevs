import styled, { css } from 'styled-components'

export const Section = styled.article`
  ${({ theme }) => css`
    margin: ${theme.spacing.sm} 0 ${theme.spacing.xlg};
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: ${theme.spacing.sm};

    div.right-side {
      display: grid;
      grid-template-rows: 1fr 1fr;
      gap: 15px;
    }

    @media (max-width: 430px) {
      margin: ${theme.spacing.xsm} 0 ${theme.spacing.sm};
      gap: ${theme.spacing.xsm};

      div.right-side {
      gap: 5px;
    }
  `}
`
