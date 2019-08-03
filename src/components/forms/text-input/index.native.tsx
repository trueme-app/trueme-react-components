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

type State = {
  width: number
  height: number
  x: number
  y: number
  dashGap: number
  dashWidth: number
}

class StyledContainer extends Component<InputProps, State> {
  readonly state = {
    width: 1,
    height: 1,
    x: 0,
    y: 0,
    dashGap: 8,
    dashWidth: 0,
  }

  getDimensions = (e: any) => {
    const { x, y, width, height } = e.nativeEvent.layout
    const { digits } = this.props
    const dashWidth = ((width - this.state.dashGap * (digits! - 1)) / digits!)

    if (width !== this.state.width || height !== this.state.height) {
      this.setState({ x, y, width, height, dashWidth })
    }
  }


  render() {
    const { valid, digits } = this.props
    console.log(this.props)
    return (
      <StyledView {...this.props}>
        {this.props.verificationCode ? (
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
          <StyledTextInput {...this.props}/>
        )}
      </StyledView>
    )
  }
}

export default withTextInput(StyledContainer)
