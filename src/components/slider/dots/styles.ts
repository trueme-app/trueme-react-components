import { css } from 'styled-components'
import { ThemeProps } from '@trueme/design-system'
import { DotsProps, DotsItemProps } from './shared'

export const listStyles = css<ThemeProps & DotsProps>`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme: { spacing }}) => spacing.xl};
  margin-left: 0;
  padding: 0;
`

export const itemStyles = css<ThemeProps & DotsItemProps>`
  display: flex;
  border-radius: ${({ theme: { borders }}) => borders.radius.xl};
  background-color: ${({ isActive, variant, theme: { colours } }) => isActive ? colours[variant!].base : colours.inactive};
  width: ${({ theme: { spacing }}) => spacing.default};
  height: ${({ theme: { spacing }}) => spacing.default};
  margin-left: 0;
  margin-right: ${({ theme: { spacing }}) => spacing.default};
  padding: 0;
`
