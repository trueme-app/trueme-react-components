import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { themes } from '@trueme/design-system/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /\.stories\.tsx$/)
const systemThemes = Object.keys(themes).map((key) => ({
  name: key, ...themes[key]
}))

addDecorator(withThemesProvider(systemThemes));

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
