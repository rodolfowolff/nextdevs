import styled, { css } from 'styled-components'

const HEIGHT_PREVIEW = '15rem'
const NUMBER_OF_ROWS = 5

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: ${theme.spacing.sm};

    height: calc(
      (${HEIGHT_PREVIEW} + ${theme.spacing.xsm}) * ${NUMBER_OF_ROWS}
    );
  `}

  @media (max-width: 768px) {
    display: block;
    grid-template-columns: 1fr;
    gap: 0;
  }
`
