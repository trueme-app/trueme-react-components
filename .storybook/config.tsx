import { configure, addDecorator } from '@storybook/react'
import { themes } from '@trueme/design-system'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import GlobalStyles from './styles'

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /\.stories\.tsx$/)
const systemThemes = Object.keys(themes).map((key) => ({
  name: key, ...themes[key]
}))

function withGlobalStyles(story: any) {
  return (
    <>
      <GlobalStyles />
      {story()}
    </>
  );
}

addDecorator(withThemesProvider(systemThemes))
addDecorator(withGlobalStyles)
addDecorator(jsxDecorator)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
