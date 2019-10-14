import { IColourDefinition, ThemeProps } from '@trueme/design-system'
import { css } from 'styled-components'
import { ButtonProps } from './shared'

export const containerStyles = css<ThemeProps & ButtonProps>`
  border-radius: ${({ shape, theme: { borders }}) => shape === 'square' ? borders.radius.default : borders.radius.xl};
  border-color: ${({ disabled, transparent, variant, theme: { colours }}) => {
    if (disabled) {
      return colours.disabled.background
    }
    if (transparent) {
      return `transparent`
    }
    return colours[variant].base
  }};
  border-width: ${({ theme: { borders }}) => borders.width.default};
  ${({ shadow }) => shadow ? `
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  shadowColor: #000;
  shadowOffset: {
    width: 0,
    height: 4,
  };
  shadowOpacity: 0.1;
  shadowRadius: 4;
  ` : ``}

  ${({ variant, transparent, disabled, reversed, theme: { colours } }) => {
    if (reversed || transparent) {
      return `
        background-color: transparent;
      `
    } else {
      if (disabled) {
        return `background-color: ${colours.disabled.background};`
      }

      return `background-color: ${colours[variant].base};`
    }
  }}
`

export const buttonStyles = css<ThemeProps & ButtonProps>`
  align-items: center;
  justify-content: center;

  ${({ shape, size, theme: { spacing }}) => {
    switch (shape) {
      case 'square':
      case 'circle':
        return `
          padding: 0;
        `
      case 'pill':
      default:
        switch (size) {
          case 'small':
            return `
              padding-top: ${spacing.sm};
              padding-bottom: ${spacing.sm};
              padding-left: ${spacing.md};
              padding-right: ${spacing.md};
            `
          case 'normal':
          default:
            return `
              padding-top: ${spacing.md};
              padding-bottom: ${spacing.md};
              padding-left: ${spacing.xl};
              padding-right: ${spacing.xl};
            `
        }
    }
  }}
`

export const textStyles = css<ThemeProps & ButtonProps>`
  ${({ reversed, variant, theme: { colours } }) => {
    if (reversed) {
      return `color: ${colours[variant!].base};`
    } else {
      return `color: ${colours[variant!].text};`
    }
  }}
  font-family: ${({ theme: { typography }}) => typography.body.base.font};
  font-size: ${({ theme: { typography }}) => typography.body.base.size};
  text-align: center;
`

export const attrStyles = (props: ThemeProps & ButtonProps) => {
  const { variant, theme: { colours } } = props
  const colour: IColourDefinition = colours[variant!] as IColourDefinition
  return {
    underlayColor: colour.light,
  }
}
