import { css } from 'styled-components'
import { ThemeProps, IColourDefinition } from '@trueme/design-system/react'
import { ButtonProps } from './index'

export const containerStyles = css<ThemeProps & ButtonProps>`
  background-color: ${({ variant, theme: { colours }}) => colours[variant!].base};
  border-radius: ${({ theme: { borders }}) => borders.radius.xl};
  border: 0;
  width: 100%;
`

export const buttonStyles = css<ThemeProps & ButtonProps>`
  padding: ${({ theme: { spacing }}) => spacing.md} ${({ theme: { spacing }}) => spacing.xl};
  align-items: center;

  &:hover {
    background-color: ${({ variant, theme: { colours }}) => colours[variant!].light};
  }

  &:focus {
    outline: 0;
  }
`

export const textStyles = css<ThemeProps & ButtonProps>`
  color: ${({ variant, theme: { colours }}) => colours[variant!].text};
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
