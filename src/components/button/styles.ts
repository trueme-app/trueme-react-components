import { css } from 'styled-components'

const baseStyles = css<any>`
  background-color: ${(props) => props.theme.colours[props.variant].base};
  border: 0;
  border-radius: ${(props) => props.theme.borders.radius.base};
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.xl};

  &:hover {
    background-color: ${(props) => props.theme.colours[props.variant].light};
  }
`

const attrStyles = (props: any) => {
  return {
    underlayColor: props.theme.colours.secondary.light,
  }
}

export {
  baseStyles,
  attrStyles,
}
