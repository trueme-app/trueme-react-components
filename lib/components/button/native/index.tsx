import styled from 'styled-components/native'
import { TouchableHighlight } from 'react-native'
import Button from '../shared'
import { baseStyles, attrStyles } from '../shared/styles'

const StyledButton = styled(TouchableHighlight).attrs(attrStyles)`${baseStyles}`

export default Button(StyledButton)
