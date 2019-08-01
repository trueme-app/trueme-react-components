import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { withTextInput } from './shared'
import { borderStyles, inputStyles, webStyles } from './styles'

const StyledTextInput = styled.input<HTMLAttributes<HTMLInputElement>>`
  ${inputStyles}
  ${webStyles}
  ${borderStyles}
  border-bottom-style: solid;
`

export default withTextInput(StyledTextInput)
