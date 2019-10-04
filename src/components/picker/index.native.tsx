import { ISystem } from '@trueme/design-system'
import React, { ReactNode } from 'react'
import { Picker, PickerProps as PickerNativeProps } from 'react-native'
import styled, { ThemeConsumer } from 'styled-components/native'
import { pickerStyles } from './styles'

interface PickerBaseProps {
  width: number | string
  children: ReactNode | ReactNode[]
}

export type PickerProps = PickerBaseProps & PickerNativeProps

const StyledPicker = styled(Picker)<PickerProps>`
  ${pickerStyles}
`

const Wrapper = (props: any) => (
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

Wrapper.Item = styled(Picker.Item)``

export default Wrapper
