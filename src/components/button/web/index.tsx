import styled from 'styled-components'
import IsomorphicButton, { IProps } from '../'
import { baseStyles } from '../styles'

const StyledButton = styled.button<IProps>`
  ${baseStyles}
`

StyledButton.defaultProps = {
  variant: 'secondary'
}

export default IsomorphicButton(StyledButton)
