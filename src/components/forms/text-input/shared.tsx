import React, { ComponentType, FC } from 'react'

export type InputProps = {
  valid?: boolean
  verificationCode?: boolean
  onFulfill?: (code: number) => void
}

export const withTextInput = <T extends object>(
  StyledInput: ComponentType<T & InputProps>,
): React.FC<T & InputProps> => ({
  valid = undefined,
  verificationCode = false,
  onFulfill = () => {},
  ...props
}: T & InputProps) => (
  <StyledInput
    onFulfill={onFulfill}
    verificationCode={verificationCode}
    valid={valid}
    {...props as T}/>
)
