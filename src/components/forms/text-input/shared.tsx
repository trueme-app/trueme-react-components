import React, { ComponentType, FC } from 'react'
import { StyledComponent } from 'styled-components'

export const withTextInput = <T extends object>(
  StyledInput: ComponentType<T>,
): React.FC<T> => ({
  ...props
}: T) => (<StyledInput {...props as T}/>)
