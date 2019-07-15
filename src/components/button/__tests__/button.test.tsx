import system, { DesignSystemThemeProvider } from '@trueme/design-system'
import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../web'

test('Button renders correctly', () => {
  const component = renderer.create(
    <DesignSystemThemeProvider theme={system}>
      <Button>This is a button</Button>
    </DesignSystemThemeProvider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
