import { TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import Button from '../shared'
import { attrStyles, baseStyles } from '../shared/styles'
import { nativeStyles } from './styles'

const StyledButton = styled(TouchableHighlight).attrs(attrStyles)`
  ${baseStyles}
  ${nativeStyles}
`

export default Button(StyledButton)
