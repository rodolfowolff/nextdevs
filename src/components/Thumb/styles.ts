import styled, { css, DefaultTheme } from 'styled-components'

import { ThumbSizes, ThumbOrientations } from '.'

type WrapperType = {
  bg: string
  size: ThumbSizes
  orientation: ThumbOrientations
}

const NUMBER_OF_ROWS = 2
const HALF_GAP_ROWS = '10px'

const wrapperModifier = {
  normalAndLandscape: () => css`
    height: 400px;
  `,
  normalAndPortrait: () => css`
    height: 270px;
  `,
  smallAndLandscape: () => css`
    height: calc((400px / ${NUMBER_OF_ROWS}) - ${HALF_GAP_ROWS});
  `,
  smallAndPortrait: () => css`
    width: 280px;
    height: 170px;

    @media (max-width: 768px) {
      width: 100%;
    }
  `,
}

export const Wrapper = styled.a<WrapperType>`
  ${({ bg, size, orientation }) => css`
    width: 100%;
    position: relative;
    background-image: linear-gradient(to bottom, transparent 50%, #13131f),
      url(${bg});
    background-size: cover;
    background-position: center center;
    z-index: 1;
    border-radius: 15px;

    ${size === 'normal' &&
    orientation === 'landscape' &&
    wrapperModifier.normalAndLandscape()}

    ${size === 'normal' &&
    orientation === 'portrait' &&
    wrapperModifier.normalAndPortrait()}

    ${size === 'small' &&
    orientation === 'landscape' &&
    wrapperModifier.smallAndLandscape()}

    ${size === 'small' &&
    orientation === 'portrait' &&
    wrapperModifier.smallAndPortrait()}
  `}
`

type TagType = {
  size: ThumbSizes
}

const tagModifier = {
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.sm};
    padding: 8px 16px;
    border-radius: 10px 0 5px 0;
  `,
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.sm};
    padding: 4px 12px;
    border-radius: 10px 0 5px 0;
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xsm};
    padding: 2px 8px;
    border-radius: 10px 0 5px 0;
  `,
}

export const Tag = styled.div<TagType>`
  ${({ theme, size }) => css`
    position: absolute;
    text-align: center;
    background-image: ${theme.lineargradient.primary};
    color: ${theme.color.white};
    font-weight: ${theme.font.weight.bd};
    text-transform: uppercase;
    ${tagModifier[size](theme)};
  `}
`

type PreviewType = {
  size: ThumbSizes
}

const previewModifier = {
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.lg};
  `,
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.md};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.sm};
  `,
}

export const Preview = styled.p<PreviewType>`
  ${({ theme, size }) => css`
    position: absolute;
    bottom: ${theme.spacing.sm};
    left: ${theme.spacing.sm};
    z-index: 2;
    color: ${theme.color.white};
    ${previewModifier[size](theme)};

    @media (max-width: 430px) {
      left: 0.4rem;
      font-size: ${theme.font.size.xsm};
  `}
`
