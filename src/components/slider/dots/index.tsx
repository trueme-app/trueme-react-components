import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { withDots, DotsProps , DotsItemProps} from './shared'
import { listStyles, itemStyles } from './styles'

const DotsList = styled.ul<DotsProps & HTMLAttributes<HTMLUListElement>>`
  ${listStyles}
`

const DotsListItem = styled.li<DotsItemProps & HTMLAttributes<HTMLLIElement>>`
  ${itemStyles}
`

export default withDots(DotsList, DotsListItem)
