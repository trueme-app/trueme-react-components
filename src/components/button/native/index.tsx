import { TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import IsomorphicButton, { IProps } from '../'
import { attrStyles, baseStyles } from '../styles'

const StyledButton = styled(TouchableHighlight).attrs(attrStyles)<IProps>`
  ${baseStyles}
`

export default IsomorphicButton(StyledButton)
