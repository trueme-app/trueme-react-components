import { css } from 'styled-components'
import { FilePickerProps } from './index.native'

export const pickerStyles = css<FilePickerProps>`
  ${({ theme: { borders, colours, spacing }}) => {
    return `
      align-items: center;
      justify-content: center;
      border-color: ${colours.tertiary.default};
      border-radius: ${borders.radius.default};
      border-width: ${borders.width.default};
      width: ${spacing.xxxl};
      height: ${spacing.xxxl};
    `
  }}
`
export const attrStyles = (props: FilePickerProps) => {
  return {
    underlayColor: 'transparent',
  }
}
