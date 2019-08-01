import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { DotsItemProps, DotsProps, withDots } from './shared'
import { itemStyles, listStyles } from './styles'

const DotsList = styled.ul<DotsProps & HTMLAttributes<HTMLUListElement>>`
  ${listStyles}
`

const DotsListItem = styled.li<DotsItemProps & HTMLAttributes<HTMLLIElement>>`
  ${itemStyles}
`

export default withDots(DotsList, DotsListItem)
