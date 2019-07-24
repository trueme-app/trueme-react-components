import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import styled from 'styled-components/native'
import withButton, { ButtonProps } from '../'
import { attrStyles, buttonStyles, containerStyles, textStyles } from '../styles'

const StyledButton = styled(TouchableHighlight).attrs(attrStyles)<ButtonProps>`
  ${containerStyles}
  max-width: 375;
`

const ButtonFront = styled(View)<ButtonProps>`
  ${buttonStyles};
`

const ButtonText = styled(Text)<ButtonProps>`
  ${textStyles};
`

const Button = (props: ButtonProps) => (
  <StyledButton {...props}>
    <ButtonFront {...props}>
      <ButtonText {...props}/>
    </ButtonFront>
  </StyledButton>
)

export default withButton(Button)
