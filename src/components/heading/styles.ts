import { ThemeProps } from '@trueme/design-system'
import { css } from 'styled-components'
import { HeadingProps } from './shared'

export const textStyles = css<ThemeProps & HeadingProps>`
  color: ${({ variant, swatch, theme: { colours }}) => variant && swatch ? colours[variant][swatch] : colours.text};
  font-family: ${({ level, theme: { typography }}) => typography.headings[`h${level}`].font};
  font-size: ${({ level, theme: { typography }}) => typography.headings[`h${level}`].size};
  font-weight: ${({ level, theme: { typography }}) => typography.headings[`h${level}`].fontWeight};
  line-height: ${({ level, theme: { typography }}) => typography.headings[`h${level}`].lineHeight};
  text-align: ${({ align }) => align};
  padding-right: 0;

  ${({ theme: { spacing }}) => {
    return `
      margin-top: ${spacing.md};
      margin-bottom: ${spacing.md};
      margin-left: 0;
      margin-right: 0;
    `
  }}
`
