import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import withHeading, { HeadingProps } from './shared'
import { textStyles } from './styles'

const HeadingText = styled(Text)<HeadingProps>`
  ${textStyles};
`

export default withHeading(HeadingText)
