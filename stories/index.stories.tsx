import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button } from '../src/web'

storiesOf('Button', module)
  .add('primary', () => <Button variant='primary' onClick={action('clicked')}>Hello Button</Button>)
  .add('secondary', () => <Button variant='secondary' onClick={action('clicked')}>Hello Button</Button>)
  .add('tertiary', () => <Button variant='tertiary' onClick={action('clicked')}>Hello Button</Button>)
