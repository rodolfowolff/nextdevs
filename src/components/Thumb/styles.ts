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
    height: 500px;
  `,
  normalAndPortrait: () => css`
    height: 500px;
  `,
  smallAndLandscape: () => css`
    height: calc((500px / ${NUMBER_OF_ROWS}) - ${HALF_GAP_ROWS});
  `,
  smallAndPortrait: () => css`
    width: 320px;
    height: 240px;

    @media (max-width: 768px) {
      width: 100%;
    }
  `,
}

export const Wrapper = styled.a<WrapperType>`
  ${({ bg, size, orientation }) => css`
    width: 100%;
    position: relative;
    background-image: url(${bg});
    background-size: cover;
    background-position: center center;

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

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(360deg, #13131f 0%, rgba(19, 19, 31, 0) 100%);
      z-index: 1;
    }
  `}
`

type TagType = {
  size: ThumbSizes
}

const tagModifier = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xsm};
    padding: 4px 12px;
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xsm};
    padding: 2px 8px;
  `,
}

export const Tag = styled.div<TagType>`
  ${({ theme, size }) => css`
    top: 10px;
    left: 15px;
    position: absolute;
    text-align: center;
    background-color: ${theme.color.black};
    color: ${theme.color.white};
    text-transform: uppercase;
    border-radius: ${theme.border.radius};
    ${tagModifier[size](theme)};
  `}
`

type PreviewType = {
  size: ThumbSizes
}

const previewModifier = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xlg};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.md};
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
  `}
`
