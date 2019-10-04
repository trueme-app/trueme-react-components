import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import Dash from 'react-native-dash'
import styled, { ThemeConsumer } from 'styled-components/native'
import Button from '../../button/index.native'
import { TextInputProps, withTextInput } from './shared'
import { borderStyles, inputStyles, passwordToggleStyles } from './styles'

const StyledView = styled(View)`
  ${borderStyles};
`

const StyledTextInput = styled(TextInput)`
  ${inputStyles};
`

const ButtonContainer = styled(View)`
  ${passwordToggleStyles}
`

interface State {
  width: number
  height: number
  x: number
  y: number
  dashGap: number
  dashWidth: number
  isSecureTextEntry: boolean
}

class StyledContainer extends Component<TextInputProps, State> {
  readonly state = {
    width: 1,
    height: 1,
    x: 0,
    y: 0,
    dashGap: 8,
    dashWidth: 0,
    isSecureTextEntry: false,
  }

  getDimensions = (e: any) => {
    const { x, y, width, height } = e.nativeEvent.layout
    const { digits } = this.props
    const dashWidth = ((width - this.state.dashGap * (digits! - 1)) / digits!)

    if (width !== this.state.width || height !== this.state.height) {
      this.setState({ x, y, width, height, dashWidth })
    }
  }

  componentDidMount() {
    const { secureTextEntry } = this.props
    this.setState({ isSecureTextEntry: !!secureTextEntry })
  }

  togglePassword = () => {
    this.setState((prevState) => ({ isSecureTextEntry: !prevState.isSecureTextEntry }))
  }

  render() {
    const { valid, digits, secureTextEntry, verificationCode } = this.props
    return (
      <StyledView {...this.props}>
        {verificationCode ? (
          <View onLayout={this.getDimensions}>
            <ThemeConsumer>
              {({ colours }) => {
                let dashColour

                if (valid === true) {
                  dashColour = colours.valid
                } else if (valid === false) {
                  dashColour = colours.invalid
                } else {
                  dashColour = colours.text
                }

                return (
                  <View>
                    <StyledTextInput
                      style={{fontVariant: ['tabular-nums']}}
                      digits={digits}
                      dashGap={this.state.dashGap}
                      dashWidth={this.state.dashWidth}
                      {...this.props}/>
                    <Dash
                      dashColor={dashColour}
                      dashLength={this.state.dashWidth}
                      dashGap={this.state.dashGap}/>
                  </View>
                )}
              }
            </ThemeConsumer>
          </View>
        ) : (
          <>
            <StyledTextInput {...this.props} isPassword={secureTextEntry} secureTextEntry={this.state.isSecureTextEntry}/>
            {secureTextEntry && (
              <ButtonContainer>
                <Button reversed={true} variant='tertiary' size='small' onPress={this.togglePassword}>Show</Button>
              </ButtonContainer>
            )}
          </>
        )}
      </StyledView>
    )
  }
}

export default withTextInput(StyledContainer)
