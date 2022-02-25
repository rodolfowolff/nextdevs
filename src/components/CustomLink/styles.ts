import styled, { css, DefaultTheme } from 'styled-components'

import { CustomLinkSizes } from '.'

type PurpleLinkType = {
  size: CustomLinkSizes
}

const purpleLinkModifier = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.md};
    padding: 0.8rem 0;
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.sm};
    padding: 0.4rem 0;
  `,
}

export const PurpleLink = styled.a<PurpleLinkType>`
  ${({ theme, size }) => css`
    width: 100%;
    display: block;
    background: ${props => props.theme.lineargradient.secondary};
    color: ${theme.color.white};
    text-align: center;
    border-radius: 0.4rem;
    text-transform: uppercase;
    font-weight: ${theme.font.weight.bd};

    ${purpleLinkModifier[size](theme)}

    transition: filter 100ms ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }

    @media (max-width: 460px) {
      padding: 0.8rem;
      margin-top: ${theme.spacing.sm};
    }
  `}
`
