import styled, { css } from 'styled-components'

import { Preview } from '../Thumb/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    overflow: hidden;

    > div {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      gap: ${theme.spacing.xsm};
    }

    ${Preview} {
      font-size: ${theme.font.size.md};
    }
  `}
`
