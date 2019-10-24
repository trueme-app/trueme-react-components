import { IColourDefinition, ThemeProps } from '@trueme/design-system'
import { css } from 'styled-components'
import { ButtonProps } from './shared'

const getBackgroundColor = (colours: any, variant: string, reversed: boolean, transparent: boolean, disabled: boolean) => {
  if (reversed || transparent) {
    return 'transparent'
  } else {
    if (disabled) {
      return colours.disabled.background
    } else {
      return colours[variant].base
    }
  }
}

export const containerStyles = css<ThemeProps & ButtonProps>`
  background-color: ${({ disabled, reversed, transparent, variant, theme: { colours }}) => getBackgroundColor(colours, variant, !!reversed, !!transparent, !!disabled)}
  border-width: ${({ borderSize, theme: { borders }}) => borders.width[borderSize || 'default']};
  border-radius: ${({ shape, theme: { borders }}) => shape === 'square' ? borders.radius.default : borders.radius.xl};
  border-color: ${({ disabled, borderVariant, transparent, variant, theme: { colours }}) => {
    if (disabled) {
      return colours.disabled.background
    }
    if (transparent) {
      return `transparent`
    }
    return colours[borderVariant || variant].base
  }};
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
  const { variant, disabled, reversed, transparent, theme: { colours } } = props
  const colourDisabled: IColourDefinition | undefined = colours.disabled
  const colourVariant: IColourDefinition | undefined = colours[variant]

  let colour: string | undefined
  if (reversed || transparent) {
    colour = 'transparent'
  } else {
    if (disabled && colourDisabled) {
      colour = colourDisabled.background
    } else {
      if (colourVariant) {
        colour = colourVariant.light
      }
    }
  }

  return {
    underlayColor: colour,
  }
}
