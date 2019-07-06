import React from 'react';
import Button from '../';
import renderer from 'react-test-renderer';

test('Button changes when hovered', () => {
  const component = renderer.create(
    <Button>This is a button</Button>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
