import styled, { css } from 'styled-components'

import { Preview } from '../Thumb/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    overflow: hidden;

    > div {
      display: grid;
      grid-template-rows: repeat(1, 1fr);
      gap: ${theme.spacing.xsm};
    }

    ${Preview} {
      font-size: ${theme.font.size.md};
    }

    @media (min-width: 860px) {
      > div {
        grid-template-columns: repeat(2, 1fr);
        gap: ${theme.spacing.sm};
      }
    }

    @media (min-width: 1360px) {
      > div {
        grid-template-columns: repeat(1, 1fr);
        gap: ${theme.spacing.sm};
      }
    }
  `}
`
