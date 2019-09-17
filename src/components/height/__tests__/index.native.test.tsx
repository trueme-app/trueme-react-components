import { convertCmToFeetInches } from '../conversion'

describe('Height Component', () => {
  test ('should convert cm to feet and inches', () => {
    const sixFeet = 183
    const fiveFeetOne = 157
    const fiveFeetThree = 160
    const fiveFeetEleven = 181
    const fourFeetSeven = 140

    expect(convertCmToFeetInches(sixFeet)).toEqual({
      label: '183cm (6\'0")',
      value: sixFeet,
    })

    expect(convertCmToFeetInches(fiveFeetOne)).toEqual({
      label: '157cm',
      value: fiveFeetOne,
    })

    expect(convertCmToFeetInches(fiveFeetThree)).toEqual({
      label: '160cm',
      value: fiveFeetThree,
    })

    expect(convertCmToFeetInches(fiveFeetEleven)).toEqual({
      label: '181cm (5\'11")',
      value: fiveFeetEleven,
    })

    expect(convertCmToFeetInches(fourFeetSeven)).toEqual({
      label: '140cm (4\'7")',
      value: fourFeetSeven,
    })
  })
})
