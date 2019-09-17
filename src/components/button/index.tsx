import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import withButton, { ButtonProps } from './shared'
import { buttonStyles, containerStyles, textStyles } from './styles'

interface ButtonHTMLProps extends HTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button<ButtonProps & ButtonHTMLProps>`
  ${containerStyles}
  ${buttonStyles}
  ${textStyles}
  ${({ shape, size, autoWidth }) => {
    switch (shape) {
      case 'square':
      case 'circle':
        switch (size) {
          case 'small':
            return `
              height: 32;
              width: 32;
            `
          case 'large':
            return `
              height: 64;
              width: 64;
            `
          default:
            return `
              height: 45;
              width: 45;
            `
        }
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
