import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    width: 80%;
    margin: 0 auto;
    max-width: 1860px;

    @media (max-width: 860px) {
      width: 95%;
      max-width: 860px;
    }
  `}
`
