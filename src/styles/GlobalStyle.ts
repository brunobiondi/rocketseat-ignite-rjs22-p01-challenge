import { ThemeType } from '@/@types/styled'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.background};
    font-family: 'Inter', sans-serif;
  }
`
