import { css } from 'styled-components'
import { ThemeProps, IColourDefinition } from '@trueme/design-system/react'
import { ButtonProps } from './index'

const defaultProps = {
  variant: 'secondary'
}

const baseStyles = css<ThemeProps & ButtonProps>`
  background-color: ${(props) => props.theme.colours[props.variant || defaultProps.variant].base};
  border: 0;
  border-radius: ${(props) => props.theme.borders.radius.base};
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.xl};

  &:hover {
    background-color: ${(props) => props.theme.colours[props.variant || defaultProps.variant].light};
  }
`

const attrStyles = (props: ThemeProps & ButtonProps) => {
  const colour: IColourDefinition = props.theme.colours[props.variant || defaultProps.variant] as IColourDefinition
  return {
    underlayColor: colour.light,
  }
}

export {
  baseStyles,
  attrStyles,
}
