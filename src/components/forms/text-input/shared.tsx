import React, { ComponentType, FC } from 'react'

export interface TextInputProps {
  valid?: boolean
  verificationCode?: boolean
  digits?: number
  rows?: number
  onFulfill?: (code: number) => void
  secureTextEntry?: boolean
  multiline?: boolean
  showBorder?: boolean
}

export interface VerificationCodeProps {
  dashGap?: number
  dashWidth?: number
  digits?: number
}

export interface InputReadOnlyProps {
  isPassword?: boolean
}

export const withTextInput = <T extends object>(
  StyledInput: ComponentType<T & TextInputProps>,
): FC<T & TextInputProps> => ({
  verificationCode = false,
  digits = 6,
  onFulfill = () => {},
  secureTextEntry = false,
  showBorder = true,
  rows,
  multiline,
  valid,
  ...props
}: T & TextInputProps) => (
  <StyledInput
    onFulfill={onFulfill}
    verificationCode={verificationCode}
    valid={valid}
    digits={digits}
    rows={rows}
    multiline={multiline}
    secureTextEntry={secureTextEntry}
    isPassword={secureTextEntry}
    showBorder={showBorder}
    {...props as T}
  />
)
