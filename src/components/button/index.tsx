import React, { ComponentType, FC } from 'react'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary'
}

const BaseButton = <T extends object>(
  StyledButton: ComponentType<T & ButtonProps>
): React.FC<T & ButtonProps> => ({
  variant = 'primary',
  ...props
}: T & ButtonProps) => (<StyledButton variant={variant} {...props as T}/>)

export default BaseButton
