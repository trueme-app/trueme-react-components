import React, { FC, HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { CheckboxProps, withCheckbox } from './shared'
import { checkboxStyles, containerStyles, labelStyles } from './styles'

const dimensions = css`
  width: 45px;
  height: 45px;
  border-radius: 45px;
`

const Container = styled.div`
  ${containerStyles}
`

const StyledCheckbox = styled.span`
  ${dimensions}
  ${checkboxStyles}
`
const HiddenCheckbox = styled.input.attrs<HTMLAttributes<HTMLInputElement>>({
  type: 'checkbox',
})`
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
`

const Label = styled.label`
  ${labelStyles}
`

const Checkbox: FC<CheckboxProps> = ({ children, onChange, ...props}) => (
  <Container onClick={onChange} {...props}>
    <HiddenCheckbox/>
    <StyledCheckbox {...props}>
      {props.checked && (
        <svg
          width='20'
          height='15'
          viewBox='0 0 20 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1 8.8L6.14286 14L19 1'
            stroke='#F5F5F1'
            strokeWidth='2'
          />
        </svg>
      )}
    </StyledCheckbox>
    <Label>{children}</Label>
  </Container>
)

export default withCheckbox(Checkbox)
