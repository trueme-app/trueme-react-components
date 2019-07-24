import { createGlobalStyle } from 'styled-components'
import BentonSansWOFF2 from '@trueme/design-system/fonts/benton-sans.woff2'
import BentonSansWOFF from '@trueme/design-system/fonts/benton-sans.woff'
import ButlerMediumWoff2 from '@trueme/design-system/fonts/butler-medium.woff2'
import ButlerMediumWoff from '@trueme/design-system/fonts/butler-medium.woff'

export default createGlobalStyle`
  @font-face {
      font-family: 'BentonSans';
      font-weight: normal;
      font-style: normal;
      src: url(${BentonSansWOFF2}) format("woff2"),
           url(${BentonSansWOFF}) format("woff");
  }

  @font-face {
      font-family: 'ButlerMedium';
      font-weight: normal;
      font-style: normal;
      src: url(${ButlerMediumWoff2}) format("woff2"),
           url(${ButlerMediumWoff}) format("woff");
  }
`
