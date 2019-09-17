import React, { useEffect, useRef, useState } from 'react'
import Picker from '../picker/index.native'
import { convertCmToFeetInches } from './conversion'

export interface HeightProps {
  width: number | string
  selectedValue: number
  onValueChange: (value: number) => void
}

export interface Height {
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

const options: Height[] = Array.from(Array(226).keys())
  .filter((n: number) => n >= startingHeight)
  .map(convertCmToFeetInches)

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
