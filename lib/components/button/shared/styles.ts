import { css } from 'styled-components'
import { borders, colours, spacing } from 'trueme-design-system'

const baseStyles = css`
  background-color: ${colours.green.base};
  border-radius: ${borders.radius.base};
  padding: ${spacing.md} ${spacing.xl};

  &:hover {
    background-color: ${colours.green.dark};
  }
`

const attrStyles = {
  underlayColor: colours.green.dark
}

export {
  baseStyles,
  attrStyles,
}
