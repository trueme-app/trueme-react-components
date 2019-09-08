import { ThemeProps } from '@trueme/design-system'
import { PickerProps } from 'react-native'
import { css } from 'styled-components'
import { PickerWrapperProps } from './index.native'

export const pickerStyles = css<ThemeProps & PickerProps & PickerWrapperProps>`
  ${({ width, theme: { typography, spacing }}) => {
    return `
      font-family: ${typography.body.base.font};
      font-size: ${typography.body.base.size};
      height: ${spacing.md};
      width: ${width ? width : '100%'};
    `
  }}
`
