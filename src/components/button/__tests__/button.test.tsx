import system from '@trueme/design-system'
import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../index'

describe('Button Component', () => {
  test('Button renders correctly', () => {
    const component = renderer.create(<Button variant='primary' theme={system}>This is a button</Button>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
