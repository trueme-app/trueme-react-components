import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import withButton, { ButtonProps } from './shared'
import { buttonStyles, containerStyles, textStyles } from './styles'

interface ButtonHTMLProps extends HTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button<ButtonProps & ButtonHTMLProps>`
  ${containerStyles}
  ${buttonStyles}
  ${textStyles}
  ${({ shape, autoWidth }) => {
    switch (shape) {
      case 'square':
      case 'circle':
        return `
          height: 45px;
          width: 45px;
        `
      case 'pill':
      default:
        if (!autoWidth) {
          return `width: 100%;`
        }
    }
  }}
  max-width: 375px;

  &:hover {
    ${({ reversed, variant, theme: { colours }}) => {
      if (reversed) {
        return `color: ${colours[variant!].text};`
      }
    }}
    background-color: ${({ variant, theme: { colours }}) => colours[variant!].light};
  }

  &:focus {
    outline: 0;
  }
`

export default withButton(StyledButton)
