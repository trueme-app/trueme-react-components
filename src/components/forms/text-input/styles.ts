import { css } from 'styled-components'
import { ThemeProps } from '@trueme/design-system'
import { InputProps, InputReadOnlyProps, VerificationCodeProps } from './shared'

export const borderStyles = css<ThemeProps & InputProps & VerificationCodeProps>`
  ${({ valid, verificationCode, theme: { borders, colours }}) => {
    if (verificationCode) {
      return `width: 100%`
    }
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

export const inputStyles = css<ThemeProps & InputProps & InputReadOnlyProps & VerificationCodeProps>`
  ${({ dashGap, dashWidth, digits, isPassword, verificationCode, theme: { borders, colours, spacing, typography }}) => {
    return `
      border: 0;
      color: ${colours.text};
      font-size: ${typography.headings.h2.size};
      padding-bottom: ${spacing.default};
      padding-right: ${isPassword ? spacing.xxxl : 0};
      padding-top: ${spacing.default};
      text-align: left;
      ${(verificationCode ? `
        margin-left: ${((dashWidth! - dashGap!) / digits!).toFixed(2)};
        padding-left: ${((dashWidth! - dashGap!) / digits!).toFixed(2)};
        margin-right: ${-((dashWidth! - dashGap!)).toFixed(2)};
        letter-spacing: ${(dashWidth! - dashGap! - 2.5).toFixed(2)};
      ` : ``)}
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

export const passwordToggleStyles = css<ThemeProps>`
  position: absolute;
  right: 0;
  bottom: ${({ theme: { spacing }}) => spacing.default};
  margin-bottom: ${({ theme: { spacing }}) => spacing.xs};
`
