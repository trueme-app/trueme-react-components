import { css } from 'styled-components'
import { ThemeProps, IColourDefinition } from '@trueme/design-system'
import { ButtonProps } from './shared'

export const containerStyles = css<ThemeProps & ButtonProps>`
  border-radius: ${({ theme: { borders }}) => borders.radius.xl};
  border: 0;

  ${({ disabled, reversed, variant, theme: { borders, colours } }) => {
    if (reversed) {
      return `
        background-color: transparent;
        border-color: ${colours[variant!].base};
        border-width: ${borders.width.default};
        border-style: solid;
      `
    } else {
      if (disabled) {
        return `background-color: ${colours.disabled.background};`
      }

      return `background-color: ${colours[variant!].base};`
    }
  }}
`

export const buttonStyles = css<ThemeProps & ButtonProps>`
  align-items: center;
  justify-content: center;

  ${({ shape, size, theme: { spacing }}) => {
    switch(shape) {
      case 'circle':
        return `
          padding: 0;
        `
      case 'pill':
      default:
        switch(size) {
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
