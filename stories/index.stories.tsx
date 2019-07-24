import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button } from '../src/web'

storiesOf('Button', module)
  .add('primary', () => <Button variant='primary' onClick={action('clicked')}>Sign up for new beginnings</Button>)
  .add('secondary', () => <Button variant='secondary' onClick={action('clicked')}>Register</Button>)
  .add('tertiary', () => <Button variant='tertiary' onClick={action('clicked')}>Help</Button>)
  .add('quaternary', () => <Button variant='quaternary' onClick={action('clicked')}>Contact Us</Button>)
  .add('quinary', () => <Button variant='quinary' onClick={action('clicked')}>Logout</Button>)
  .add('senary', () => <Button variant='senary' onClick={action('clicked')}>Find Store</Button>)
