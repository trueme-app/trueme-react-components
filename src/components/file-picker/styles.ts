import { css } from 'styled-components'
import { FilePickerProps } from './index.native'

export const pickerStyles = css<FilePickerProps>`
  ${({ hasThumbnail, theme: { borders, colours }}) => {
    return `
      align-items: center;
      aspect-ratio: 1;
      justify-content: center;
      border-color: ${hasThumbnail ? colours.monochrome.base : colours.text};
      border-radius: ${borders.radius.default};
      border-width: ${borders.width.default};
      width: 100%;
    `
  }}
`
export const attrStyles = (props: FilePickerProps) => {
  return {
    underlayColor: 'transparent',
  }
}
