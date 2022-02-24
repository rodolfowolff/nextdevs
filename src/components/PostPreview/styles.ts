import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: ${theme.spacing.xsm};

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 460px;

    h3 {
      font-size: ${theme.font.size.sm};
      font-weight: ${theme.font.weight.md};
    }

    p,
    span {
      font-size: ${theme.font.size.xsm};
    }
  `}

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const WrapperButton = styled.div`
  width: 10rem;
`
