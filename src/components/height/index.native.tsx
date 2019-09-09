import React, { useEffect, useRef, useState } from 'react'
import Picker from '../picker/index.native'

export interface HeightProps {
  width: number | string
  selectedValue: number
  onValueChange: (value: number) => void
}

interface Height {
  label: string
  value: number
}

interface State {
  value: number
}

const useCompare = (val: any) => {
  const prevVal = usePrevious(val)
  return prevVal !== val
}

const usePrevious = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const startingHeight = 55
const factor = 30.48
const inch = 2.54

const options: Height[] = Array.from(Array(200).keys())
  .filter((n: number) => n >= startingHeight)
  .map((n: number) => {
    const feetInches = (n / factor)
    .toFixed(2)
    .split('')
    .filter((value: string) => value !== '.')

    const formattedHeight = feetInches.slice(0, 2).join(`'`)

    return {
      label: `${Math.floor(n % inch) !== 0 ? `${n}cm` : `${n}cm (${formattedHeight})`}`,
      value: n,
    }
  })

const defaultHeight = 178

const HeightPicker = ({
  onValueChange,
  selectedValue = defaultHeight,
}: {
  onValueChange: (value: number) => void,
  selectedValue: number,
}) => {
  if (!selectedValue) {
    selectedValue = defaultHeight
  }

  const hasUpdated = useCompare(selectedValue)
  const [state, setState] = useState<State>({
    value: 0,
  })

  useEffect(() => {
    if (hasUpdated) {
      setState({
        value: selectedValue,
      })
    }
  })

  const handleValueChange = (value: number) => {
    setState({
      ...state,
      value,
    })

    if (onValueChange) {
      onValueChange(value)
    }
  }

  return (
    <Picker selectedValue={selectedValue} onValueChange={handleValueChange}>
      {options.map(({ label, value }) => <Picker.Item key={value} label={label} value={value}/>)}
    </Picker>
  )
}

export default HeightPicker
