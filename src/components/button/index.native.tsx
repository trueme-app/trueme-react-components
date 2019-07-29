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
  ${({ shape }) => {
    switch(shape) {
      case 'circle':
        return `
          height: 45;
          width: 45;
        `
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
