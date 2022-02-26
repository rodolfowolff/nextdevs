import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    width: 95%;
    max-width: 860px;
    margin: 0 auto;

    @media (min-width: 861px) {
      width: 80%;
      max-width: 1440px;
    }
  `}
`
