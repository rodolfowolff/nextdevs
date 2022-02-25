import styled, { css } from 'styled-components'

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xlg};
    font-weight: ${theme.font.weight.normal};
    position: relative;
    margin-bottom: calc(${theme.spacing.xsm} + 1.6rem);

    &::after {
      content: '';
      position: absolute;
      width: 25rem;
      height: 0.3rem;
      background: ${theme.lineargradient.secondary};
      left: 0;
      bottom: -1.2rem;
    }
  `}
`
