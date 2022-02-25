import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    color: ${theme.color.primary};
  `}
`
