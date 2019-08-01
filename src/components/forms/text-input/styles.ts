import { css } from 'styled-components'
import { ThemeProps } from '@trueme/design-system'

export const borderStyles = css<ThemeProps>`
  ${({ theme: { borders, colours, spacing, typography }}) => {
    return `
      border-bottom-color: ${colours.text};
      border-bottom-width: ${borders.width.default};
      width: 100%;
    `
  }}
`

export const inputStyles = css<ThemeProps>`
  ${({ theme: { borders, colours, spacing, typography }}) => {
    return `
      border: 0;
      color: ${colours.text};
      font-size: ${typography.headings.h2.size};
      padding-bottom: ${spacing.default};
      padding-top: ${spacing.default};
      text-align: left;
    `
  }}
`

export const webStyles = css<ThemeProps>`
  &::placeholder {
    color: ${({ theme: { colours }}) => colours.inactive};
  }

  &:focus {
    outline: none;
  }
`
