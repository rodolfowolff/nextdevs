import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 13rem;
    margin: 0 auto;
    text-align: center;
    flex-direction: column;
    justify-content: center;

    a {
      display: block;
      font-size: ${theme.font.size.xlg};
      background: ${props => props.theme.lineargradient.secondary};
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: ${theme.font.weight.bd};
      margin-bottom: ${theme.spacing.xsm};
    }
  `}
`
