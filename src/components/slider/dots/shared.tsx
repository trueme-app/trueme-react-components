import React, { ComponentType } from 'react'
import { ColourVariant } from '../../../types'

export interface DotsProps {
  variant?: ColourVariant
  current: number
  total: number
}

export interface DotsItemProps {
  variant?: ColourVariant
  isActive: boolean
}

export const withDots = <T extends DotsProps>(
  StyledDots: ComponentType<T>,
  StyledDotsListItem: ComponentType<DotsItemProps>,
) => ({
  current = 0,
  total = 0,
  variant = 'primary',
  ...props
}: T & DotsProps) => (
  <StyledDots {...props as T}>
    {[...Array(total).keys()].map((n: number) => (<StyledDotsListItem key={`dot-list-item-${n}`} variant={variant} isActive={current === n}/>))}
  </StyledDots>
)
