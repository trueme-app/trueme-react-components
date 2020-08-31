import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import withButton, { ButtonProps } from './shared'
import { attrStyles, buttonStyles, containerStyles, textStyles } from './styles'

const StyledButton = styled(TouchableOpacity).attrs(attrStyles)<ButtonProps>`
  ${containerStyles}

  ${({ shape, autoWidth }) => {
    if (shape === 'pill' && !autoWidth) {
      return `width: 100%;`
    }
  }}

  max-width: 375px;
`

const ButtonFront = styled(View)<ButtonProps>`
  ${buttonStyles};
  ${({ transparent, shape, size }) => {
    switch (shape) {
      case 'square':
      case 'circle':
        if (transparent) {
          return
        }
        switch (size) {
          case 'tiny':
            return `
              height: 20px;
              width: 20px;
            `
          case 'small':
            return `
              height: 32px;
              width: 32px;
            `
          case 'large':
            return `
              height: 64px;
              width: 64px;
            `
          default:
            return `
              height: 45px;
              width: 45px;
            `
        }
      default:
    }
  }}
`

const ButtonText = styled(Text)<ButtonProps>`
  ${textStyles};
`

const Button = (props: any) => (
  <StyledButton {...props}>
    <ButtonFront {...props}>
      {typeof props.children === 'string' && (<ButtonText {...props}/>)}
      {typeof props.children !== 'string' && (props.children)}
    </ButtonFront>
  </StyledButton>
)

export default withButton(Button)
