import { ThemeProvider } from 'styled-components'

import { AppRoutes } from './Routes'
import { IssuesContextProvider } from './contexts/IsseusContexts'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <IssuesContextProvider>
        <AppRoutes />
      </IssuesContextProvider>
    </ThemeProvider>
  )
}
