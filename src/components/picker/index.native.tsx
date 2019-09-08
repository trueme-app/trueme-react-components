import React, { ReactNode } from 'react'
import { Picker, PickerProps } from 'react-native'
import styled from 'styled-components/native'
import { pickerStyles } from './styles'

export interface PickerWrapperProps {
  width: number | string
  children: ReactNode | ReactNode[]
}

const StyledPicker = styled(Picker)<PickerProps & PickerWrapperProps>`
  ${pickerStyles}
`

const Wrapper = (props: PickerProps & PickerWrapperProps) => <StyledPicker {...props}>{props.children}</StyledPicker>

Wrapper.Item = styled(Picker.Item)``

export default Wrapper
