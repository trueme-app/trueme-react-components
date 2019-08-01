import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import styled from 'styled-components/native'
import { withTextInput } from './shared'
import { borderStyles, inputStyles } from './styles'

const StyledView = styled(View)`
  ${borderStyles};
`

const StyledTextInput = styled(TextInput)`
  ${inputStyles};
`

class StyledContainer extends Component {
  render() {
    return (
      <StyledView>
        <StyledTextInput {...this.props}/>
      </StyledView>
    )
  }
}

export default withTextInput(StyledContainer)
