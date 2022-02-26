import styled, { css } from 'styled-components'

export const Summary = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xlg};
    font-weight: ${theme.font.weight.normal};
  `}
`

export const PublishedAt = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.size.lg};
    margin: ${theme.spacing.xsm} 0;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.size.lg};

    img {
      width: 100%;
    }

    p + p {
      margin-top: ${theme.spacing.xsm};
    }
  `}
`
