import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import styled from 'styled-components/native'
import { attrStyles, pickerStyles } from './styles'

export interface FilePickerProps {
  hasThumbnail: boolean
  onPress: () => void
}

const StyledPicker = styled(TouchableOpacity).attrs(attrStyles)<FilePickerProps>`
  ${pickerStyles}
`

const Component: FC<FilePickerProps> = (props) => (
  <StyledPicker {...props}>
    {props.children ? props.children : (
      <Svg width={20} height={20} fill='none' {...props}>
        <Path stroke='#09333E' strokeLinecap='round' d='M9.5.5v19M.5 10.5h19' />
      </Svg>
    )}
  </StyledPicker>
)

export default Component
