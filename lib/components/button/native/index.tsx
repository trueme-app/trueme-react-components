import styled from 'styled-components/native'
import { TouchableHighlight } from 'react-native'
import Button from '../shared'
import { baseStyles, attrStyles } from '../shared/styles'
import { nativeStyles } from './styles'

const StyledButton = styled(TouchableHighlight).attrs(attrStyles)`
  ${baseStyles}
  ${nativeStyles}
`

export default Button(StyledButton)
