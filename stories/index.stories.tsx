import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { Button, Dots, Heading, TextInput } from '../src'
import ChevronRight from '../assets/icons/icon-chevron-right.svg'

const sizes = {
  Small: 'small',
  Normal: 'normal'
}

const variants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Quaternary: 'quaternary',
  Quinary: 'quinary',
  Senary: 'senary',
}

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('pill with text', () => {
      const size = select('Size', sizes, 'normal', 'size') as 'small' | 'normal' | undefined;
      const reversed = boolean('Reversed', false)
      const autoWidth = boolean('Auto Width', false)
      const variant = select('Variant', variants, 'primary', 'variant') as 'primary' | 'secondary' | 'quaternary' | 'quinary' | 'senary'
      return (<Button variant={variant} size={size} reversed={reversed} autoWidth={autoWidth} onClick={action('clicked')}>Sign up for new beginnings</Button>)
    })
    .add('circle with icon', () => {
      const reversed = boolean('Reversed', false)
      const variant = select('Variant', variants, 'primary', 'variant') as 'primary' | 'secondary' | 'quaternary' | 'quinary' | 'senary'
      return (<Button shape='circle' variant={variant} reversed={reversed} onClick={action('clicked')}><ChevronRight/></Button>)
    })

storiesOf('Heading', module)
  .add('h1', () => <Heading level={1}>Welcome to new beginnings</Heading>)
  .add('h2', () => <Heading level={2}>Welcome to new beginnings</Heading>)
  .add('h3', () => <Heading level={3}>Welcome to new beginnings</Heading>)
  .add('h4', () => <Heading level={4}>Welcome to new beginnings</Heading>)
  .add('h5', () => <Heading level={4}>Welcome to new beginnings</Heading>)

storiesOf('Slider/Dots', module)
  .add('default', () => <Dots total={4} current={0}/>)

storiesOf('Forms/Text Input', module)
  .add('default', () => <TextInput/>)
  .add('with placeholder', () => <TextInput placeholder='This is a placeholder'/>)
  .add('required', () => <TextInput required/>)
  .add('password', () => <TextInput type='password'/>)
