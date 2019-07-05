import styled from 'styled-components'
import Button from './shared'
import { baseStyles } from './shared/styles'
import { webStyles } from './styles'

const StyledButton = styled.button`
  ${baseStyles}
  ${webStyles}
`

export default Button(StyledButton)
