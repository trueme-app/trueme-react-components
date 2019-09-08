import { css } from 'styled-components'
import { DOBProps } from './index.native'

export const pickerStyles = css<DOBProps>`
  ${({ width, theme: { typography, spacing }}) => {
    return `
      font-family: ${typography.body.base.font};
      font-size: ${typography.headings.h2.size};
      height: ${spacing.xxxxl};
      margin-bottom: ${spacing.xl};
      margin-top: ${spacing.md};
      width: ${width ? width : '100%'};
    `
  }}
`
