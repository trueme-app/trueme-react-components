import system from '@trueme/design-system/react'
import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../web'

test('Button renders correctly', () => {
  const component = renderer.create(
    <Button theme={system}>This is a button</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
