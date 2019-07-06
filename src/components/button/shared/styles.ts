import { css } from 'styled-components'
import { borders, colours } from '@trueme/design-system/react'

const baseStyles = css`
  background-color: ${colours.green.base};
  border-radius: ${borders.radius.base};

  &:hover {
    background-color: ${colours.green.dark};
  }
`

const attrStyles = {
  underlayColor: colours.green.dark,
}

export {
  baseStyles,
  attrStyles,
}
