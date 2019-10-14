import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import styled from 'styled-components/native'
import withButton, { ButtonProps } from './shared'
import { attrStyles, buttonStyles, containerStyles, textStyles } from './styles'

const StyledButton = styled(TouchableHighlight).attrs(attrStyles)<ButtonProps>`
  ${containerStyles}

  ${({ shape, autoWidth }) => {
    if (shape === 'pill' && !autoWidth) {
      return `width: 100%;`
    }
  }}

  max-width: 375;
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
          case 'small':
            return `
              height: 32;
              width: 32;
            `
          case 'large':
            return `
              height: 64;
              width: 64;
            `
          default:
            return `
              height: 45;
              width: 45;
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
