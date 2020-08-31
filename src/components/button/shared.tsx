import React, { ComponentType, FC } from 'react'
import { ColourVariant } from '../../types'

export interface ButtonProps {
  variant: ColourVariant
  borderVariant?: ColourVariant | undefined
  shape?: 'pill' | 'circle' | 'square'
  size?: 'normal' | 'small' | 'large' | 'tiny'
  borderSize?: 'default' | 'md' | 'lg'
  autoWidth?: boolean
  reversed?: boolean
  disabled?: boolean
  shadow?: boolean
  transparent?: boolean
}

const BaseButton = <T extends object>(
  StyledButton: ComponentType<T & ButtonProps>,
): React.FC<T & ButtonProps> => ({
  variant = 'primary',
  shape = 'pill',
  size = 'normal',
  borderSize = 'default',
  reversed = false,
  autoWidth = true,
  disabled = false,
  shadow = false,
  transparent = false,
  borderVariant,
  ...props
}: T & ButtonProps) => (
  <StyledButton
    disabled={disabled}
    autoWidth={autoWidth}
    size={size}
    reversed={reversed}
    shape={shape}
    variant={variant}
    shadow={shadow}
    transparent={transparent}
    borderVariant={borderVariant ? borderVariant : variant}
    borderSize={borderSize}
    {...props as T}
  />
)

export default BaseButton
