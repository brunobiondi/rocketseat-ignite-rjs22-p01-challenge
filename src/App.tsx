import { ThemeProvider } from 'styled-components'
import { ToDoList } from './components/ToDoList'
import { GlobalStyle } from './styles/GlobalStyle'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToDoList />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
