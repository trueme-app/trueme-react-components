import { PickerIOS } from '@react-native-community/picker'
import { PickerIOSProps } from '@react-native-community/picker/typings/PickerIOS'
import { ISystem } from '@trueme/design-system'
import React, { ReactNode } from 'react'
import styled, { ThemeConsumer } from 'styled-components/native'
import { pickerStyles } from './styles'

interface PickerBaseProps {
  width?: number | string
  children: ReactNode | ReactNode[]
}

export type PickerProps = PickerBaseProps & PickerIOSProps

const StyledPicker = styled(PickerIOS)<PickerProps>`
  ${pickerStyles}
`

const Wrapper = (props: PickerProps) => (
  <ThemeConsumer>
    {(theme: ISystem) => (
      <StyledPicker
        itemStyle={{ height: `${theme.spacing.xxxxl}%` }}
        {...props}
      >
        {props.children}
      </StyledPicker>
    )}
  </ThemeConsumer>
)

Wrapper.Item = styled(PickerIOS.Item)``

export default Wrapper
