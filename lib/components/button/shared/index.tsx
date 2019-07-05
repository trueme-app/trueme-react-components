import React, { Component } from 'react'

interface IButtonProps {
  children?: React.ReactNode[]
  onPress?: () => void
}

interface IButton {
  StyledButton: React.ReactNode
}

const Button = <P extends IButton>(StyledButton: React.ComponentType<P>) =>
  class Base extends React.Component<IButtonProps> {
    render() {
      const { onPress, children } = this.props
      return <StyledButton onPress={onPress}>{children}</StyledButton>
    }
  }

export default Button
