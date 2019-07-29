import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import withHeading, { HeadingProps } from './shared'
import { textStyles } from './styles'

interface HeadingHTMLProps extends HTMLAttributes<HTMLHeadingElement> {}

const StyledHeading = styled.h1<HeadingProps & HeadingHTMLProps>`
  ${textStyles}
`

export default withHeading(StyledHeading)
