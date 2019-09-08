import { ThemeProps } from '@trueme/design-system'
import { css } from 'styled-components'
import { HeadingProps } from './shared'

export const textStyles = css<ThemeProps & HeadingProps>`
  color: ${({ theme: { colours }}) => colours.text};
  font-family: ${({ level, theme: { typography }}) => typography.headings[`h${level}`].font};
  font-size: ${({ level, theme: { typography }}) => typography.headings[`h${level}`].size};
  font-weight: ${({ level, theme: { typography }}) => typography.headings[`h${level}`].fontWeight};
  line-height: ${({ level, theme: { typography }}) => typography.headings[`h${level}`].lineHeight};
  padding-right: ${({ theme: { spacing }}) => spacing.xl};
  text-align: left;

  ${({ theme: { spacing }}) => {
    return `
      margin-top: ${spacing.md};
      margin-bottom: ${spacing.md};
      margin-left: 0;
      margin-right: 0;
    `
  }}
`
