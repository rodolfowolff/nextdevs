import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.sm};

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.lineargradient.text};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.lineargradient.text};
    }

    @media (max-width: 768px) {
      gap: ${theme.spacing.md};
  `}
`
