import React, { ComponentType, FC } from 'react'
import { ColourVariant } from '../../types'

export interface ButtonProps {
  variant: ColourVariant
  shape?: 'pill' | 'circle'
  size?: 'normal' | 'small'
  autoWidth?: boolean
  reversed?: boolean
  disabled?: boolean
}

const BaseButton = <T extends object>(
  StyledButton: ComponentType<T & ButtonProps>,
): React.FC<T & ButtonProps> => ({
  variant = 'primary',
  shape = 'pill',
  size = 'normal',
  reversed = false,
  autoWidth = true,
  disabled = false,
  ...props
}: T & ButtonProps) => (
  <StyledButton
    disabled={disabled}
    autoWidth={autoWidth}
    size={size}
    reversed={reversed}
    shape={shape}
    variant={variant}
    {...props as T}/>
)

export default BaseButton
