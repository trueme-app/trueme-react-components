import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { withDots, DotsProps, DotsItemProps } from './shared'
import { listStyles, itemStyles } from './styles'

const DotsList = styled(View)<DotsProps>`
  ${listStyles};
`

const DotsListItem = styled(View)<DotsItemProps>`
  ${itemStyles};
`

export default withDots(DotsList, DotsListItem)
