import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xsm};

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.color.darkGray};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.color.primary};
    }

    @media (max-width: 768px) {
      gap: ${theme.spacing.md};
  `}
`
