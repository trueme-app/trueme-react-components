import moment, { Moment } from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import Picker from '../picker/index.native'
import { Container } from './styles'

export interface DOBProps {
  width: number | string
  selectedValue: Date
  onValueChange: (value: Date) => void
}

interface State {
  year: number
  month: number
  day: number
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


const options = {
  years: Array.from(Array(100).keys()).map((n: number) => (moment().year() - 18) - n),
  months: Array.from(Array(12).keys()),
  days: Array.from(Array(31).keys()).map((n: number) => n + 1),
}

const defaultDate = moment().add(-18, 'years').format('YYYY-MM-DD')

const DateOfBirthPicker = ({
  onValueChange,
  selectedValue = defaultDate,
}: {
  onValueChange: (value: Date) => void,
  selectedValue: string,
}) => {
  if (!selectedValue) {
    return
  }

  const parsedDate = moment(selectedValue)
  const hasUpdated = useCompare(selectedValue)
  const [state, setState] = useState<State>({
    year: 0,
    month: 0,
    day: 0,
  })

  useEffect(() => {
    if (hasUpdated) {
      setState({
        year: parsedDate.year(),
        month: parsedDate.month(),
        day: parsedDate.date(),
      })
    }
  })

  const handleValueChange = (key: string) => (value: any) => {
    setState({
      ...state,
      [key]: value,
    })

    const date = moment({
      year: key === 'year' ? value : state.year,
      month: key === 'month' ? value : state.month,
      day: key === 'day' ? value : state.day,
    }).toDate()

    if (onValueChange) {
      onValueChange(date)
    }
  }

  return (
    <Container>
      <Picker width='25%' selectedValue={parsedDate.date()} onValueChange={handleValueChange('day')}>
        {options.days.map(day => <Picker.Item key={day} label={moment({ day }).format('DD')} value={day}/>)}
      </Picker>
      <Picker width='50%' selectedValue={parsedDate.month()} onValueChange={handleValueChange('month')}>
        {options.months.map(month => <Picker.Item key={month} label={moment({ month }).format('MMMM')} value={month}/>)}
      </Picker>
      <Picker width='25%' selectedValue={parsedDate.year()} onValueChange={handleValueChange('year')}>
        {options.years.map(year => <Picker.Item key={year} label={year.toString()} value={year}/>)}
      </Picker>
    </Container>
  )
}

export default DateOfBirthPicker
