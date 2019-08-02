import { css } from 'styled-components'
import { ThemeProps } from '@trueme/design-system'
import { InputProps } from './shared'

export const borderStyles = css<ThemeProps & InputProps>`
  ${({ valid, theme: { borders, colours }}) => {
    let borderColor
    switch(valid) {
      case true:
        borderColor = colours.valid
        break;
      case false:
        borderColor = colours.invalid
        break;
      default:
        borderColor = colours.text
    }

    return `
      border-bottom-color: ${borderColor};
      border-bottom-width: ${borders.width.default};
      width: 100%;
    `
  }}
`

export const inputStyles = css<ThemeProps & InputProps>`
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
