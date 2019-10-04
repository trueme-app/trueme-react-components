import React, { ComponentType, FC } from 'react'

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5
  variant?: string
  swatch?: string
}

const BaseHeading = <T extends object>(
  StyledHeading: ComponentType<T & HeadingProps>,
): React.FC<T & HeadingProps> => ({
  level = 1,
  ...props
}: T & HeadingProps) => (
  <StyledHeading
    level={level}
    {...props as T}
  />)

export default BaseHeading
