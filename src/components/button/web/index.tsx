import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import withButton, { ButtonProps } from '../'
import { buttonStyles, containerStyles, textStyles } from '../styles'

interface ButtonHTMLProps extends HTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button<ButtonProps & ButtonHTMLProps>`
  ${containerStyles}
  ${buttonStyles}
  ${textStyles}
  max-width: 375px;
`

export default withButton(StyledButton)
