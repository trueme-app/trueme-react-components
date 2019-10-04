import React, { ComponentType, FC, useEffect, useState } from 'react'

export interface CheckboxProps {
  checked?: boolean
  onChange?: (...args: any[]) => void
}
export const withCheckbox = <T extends object>(
  StyledCheckbox: ComponentType<T & CheckboxProps>,
): FC<T & CheckboxProps> => ({
  checked = false,
  onChange,
  ...props
}: T & CheckboxProps) => {
  const [state, setState] = useState({
    isChecked: checked,
  })

  useEffect(() => {
    setState({ isChecked: checked })
  }, [checked])

  const handleChange = () => {
    const isChecked = !state.isChecked
    setState({ ...state, isChecked })
    if (onChange) {
      onChange(isChecked)
    }
  }

  return (
    <StyledCheckbox
      checked={state.isChecked}
      onChange={handleChange}
      {...props as T}
    />
  )
}
