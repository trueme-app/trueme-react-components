import styled from 'styled-components/native'
import { TouchableHighlight } from 'react-native'
import Button from '../shared'
import styles from '../shared/styles'

const StyledButton = styled(TouchableHighlight)`${styles}`

export default Button(StyledButton)
