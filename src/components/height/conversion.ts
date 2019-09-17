import { Height } from './index.native'

export const convertCmToFeetInches = (n: number): Height => {
  const factor = 30.48
  const inch = 2.54
  const feetWithDecimal = (n / factor)
  const feet = Math.floor(feetWithDecimal)
  const inches = Math.round((feetWithDecimal - feet) * 12)
  const formattedHeight = `${feet}'${inches}"`

  return {
    label: `${Math.floor(n % inch) !== 0 ? `${n}cm` : `${n}cm (${formattedHeight})`}`,
    value: n,
  }
}
