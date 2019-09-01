import React, { ComponentType, FC, useEffect, useState } from 'react'

export interface InputProps {
  checked?: boolean
  onChange?: (...args: any[]) => void
}
export const withCheckbox = <T extends object>(
  StyledCheckbox: ComponentType<T & InputProps>,
): FC<T & InputProps> => ({
  checked = false,
  onChange,
  ...props
}: T & InputProps) => {
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
