import React, { ComponentType, FC } from 'react'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const IsomorphicButton = <T extends object>(
  StyledButton: ComponentType<T & ButtonProps>
): React.FC<T & ButtonProps> => (props: ButtonProps) => (<StyledButton {...props as T}/>)

export default IsomorphicButton
