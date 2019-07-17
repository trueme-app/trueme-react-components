import { TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import IsomorphicButton, { ButtonProps } from '../'
import { attrStyles, baseStyles } from '../styles'

const StyledButton = styled(TouchableHighlight).attrs(attrStyles)<ButtonProps>`
  ${baseStyles}
`

export default IsomorphicButton(StyledButton)
