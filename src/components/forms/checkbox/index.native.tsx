import React, { FC } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import styled, { css } from 'styled-components'
import { CheckboxProps, withCheckbox } from './shared'
import { attrStyles, checkboxStyles, containerStyles, labelStyles } from './styles'

const dimensions = css`
  width: 45;
  height: 45;
  border-radius: 45;
`

const Container = styled(TouchableHighlight).attrs(attrStyles)`
  ${containerStyles}
`

const Wrapper = styled(View)`
  ${containerStyles}
`

const StyledCheckbox = styled(View)`
  ${dimensions}
  ${checkboxStyles}
`

const Label = styled(Text)`
  ${labelStyles}
`

const Checkbox: FC<CheckboxProps> = ({ children, onChange, ...props}) => (
  <Container onPress={onChange}>
    <Wrapper>
      <StyledCheckbox {...props}>
        {props.checked && (
          <Svg width={20} height={15} fill='none'>
            <Path d='M1 8.8L6.143 14 19 1' stroke='#F5F5F1' />
          </Svg>
        )}
      </StyledCheckbox>
      <Label>{children}</Label>
    </Wrapper>
  </Container>
)

export default withCheckbox(Checkbox)
