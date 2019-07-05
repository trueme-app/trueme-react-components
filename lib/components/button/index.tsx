import styled from 'styled-components'
import Button from './shared'
import { baseStyles } from './shared/styles'

const StyledButton = styled.button`${baseStyles}`

export default Button(StyledButton)
