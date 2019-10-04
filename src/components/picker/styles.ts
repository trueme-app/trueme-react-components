import { css } from 'styled-components'
import { PickerProps } from './index.native'

export const pickerStyles = css<PickerProps>`
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
