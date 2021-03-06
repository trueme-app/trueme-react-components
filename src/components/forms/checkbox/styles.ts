import { ThemeProps } from '@trueme/design-system'
import { css } from 'styled-components'
import { CheckboxProps } from './shared'

export const containerStyles = css<ThemeProps & CheckboxProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const checkboxStyles = css<ThemeProps & CheckboxProps>`
  ${({ checked, theme: { borders, colours, spacing }}) => {
    return `
      display: flex;
      align-items: center;
      justify-content: center;
      border-color: ${checked ? colours.primary.base : colours.tertiary.base};
      border-width: ${borders.width.default};
      border-style: solid;
      background-color: ${checked ? colours.primary.base : 'transparent'};
      margin-right: ${spacing.lg};
    `
  }}
`

export const labelStyles = css<ThemeProps & CheckboxProps>`
  ${({ theme: { typography }}) => {
    return `
      font-family: ${typography.body.base.font};
      font-size: ${typography.body.base.size};
      font-weight: ${typography.body.base.fontWeight};
      line-height: ${typography.body.base.lineHeight};
    `
  }}
`

export const attrStyles = () => {
  return {
    underlayColor: 'transparent',
  }
}
