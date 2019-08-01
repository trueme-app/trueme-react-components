import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { DotsItemProps, DotsProps, withDots } from './shared'
import { itemStyles, listStyles } from './styles'

const DotsList = styled(View)<DotsProps>`
  ${listStyles};
`

const DotsListItem = styled(View)<DotsItemProps>`
  ${itemStyles};
`

export default withDots(DotsList, DotsListItem)
