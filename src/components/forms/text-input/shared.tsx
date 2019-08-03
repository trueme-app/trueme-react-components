import React, { ComponentType, FC } from 'react'

export type InputProps = {
  valid?: boolean
  verificationCode?: boolean
  digits?: number,
  onFulfill?: (code: number) => void
}

export type VerificationCodeProps = {
  dashGap?: number
  dashWidth?: number
  digits?: number
}

export const withTextInput = <T extends object>(
  StyledInput: ComponentType<T & InputProps>,
): React.FC<T & InputProps> => ({
  valid = undefined,
  verificationCode = false,
  digits = 6,
  onFulfill = () => {},
  ...props
}: T & InputProps) => (
  <StyledInput
    onFulfill={onFulfill}
    verificationCode={verificationCode}
    valid={valid}
    digits={digits}
    {...props as T}/>
)
