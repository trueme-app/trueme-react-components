import React, { Component, ComponentType, ReactNode } from 'react'
import { TouchableHighlight } from 'react-native'

export interface IButtonProps {
  children?: ReactNode[]
  onPress?: () => void
}

const Button = <T extends object>(StyledButton: ComponentType<T>) =>
  class Base extends Component<T & IButtonProps> {
    render() {
      const { onPress, children } = this.props
      return (<StyledButton {...this.props as T} onPress={onPress}>{children}</StyledButton>)
    }
  }

export default Button
