import { ISystem } from '@trueme/design-system'
import React, { ReactNode } from 'react'
import { Picker, PickerProps } from 'react-native'
import styled, { ThemeConsumer } from 'styled-components/native'
import { pickerStyles } from './styles'

export interface PickerWrapperProps {
  width: number | string
  children: ReactNode | ReactNode[]
}

export type DOBProps = PickerProps & PickerWrapperProps

const StyledPicker = styled(Picker)<DOBProps>`
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
