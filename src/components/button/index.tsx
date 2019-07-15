import React, { ComponentType, HTMLAttributes, ReactNode } from 'react'

export interface IBaseProps extends HTMLAttributes<HTMLButtonElement> {}

export interface IProps extends IBaseProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
}

function IsomorphicButton<T extends IProps>(StyledButton: ComponentType<T & IProps>) {
  return (props: T) => {
    return (
      <StyledButton {...props}/>
    )}
}

export default IsomorphicButton
