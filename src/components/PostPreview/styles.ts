import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: ${theme.spacing.sm};

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: ${theme.spacing.md};
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    h3 {
      font-size: ${theme.font.size.sm};
      font-weight: ${theme.font.weight.md};
    }

    p {
      font-size: ${theme.font.size.md};
    }

    span {
      font-size: ${theme.font.size.sm};
    }

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 460px) {
      h3 {
        font-size: ${theme.font.size.xsm};
        font-weight: ${theme.font.weight.md};
      }

      p {
        font-size: ${theme.font.size.sm};
        margin: ${theme.spacing.sm} 0;
      }

      span {
        font-size: ${theme.font.size.xsm};
        padding: ${theme.spacing.lg} 0;
      }
    }
  `}
`

export const WrapperButton = styled.div`
  width: 10rem;
`

export const Text = styled.span`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  left: -1px;
`
