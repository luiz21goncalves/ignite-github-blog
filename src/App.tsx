import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'styled-components'

import { AppRoutes } from './Routes'
import { queryClient } from './services/queryClient'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
