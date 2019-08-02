import { ISystem } from '@trueme/design-system'
import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import styled, { ThemeConsumer } from 'styled-components/native'
import Dash from 'react-native-dash'
import { withTextInput, InputProps } from './shared'
import { borderStyles, inputStyles } from './styles'

const StyledView = styled(View)`
  ${borderStyles};
`

const StyledTextInput = styled(TextInput)`
  ${inputStyles};
`

class StyledContainer extends Component<InputProps> {
  render() {
    return (
      <StyledView {...this.props}>
        <StyledTextInput {...this.props}/>
        {this.props.verificationCode && (
          <Dash style={{ width: '15%', height:1 }}/>
        )}
      </StyledView>
    )
  }
}

export default withTextInput(StyledContainer)
