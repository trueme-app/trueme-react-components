import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import IsomorphicButton, { ButtonProps } from '../'
import { baseStyles } from '../styles'

interface ButtonWebProps extends HTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button<ButtonProps & ButtonWebProps>`
  ${baseStyles}
`

StyledButton.defaultProps = {
  variant: 'secondary',
}

export default IsomorphicButton(StyledButton)
