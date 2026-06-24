import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'

import { AppRouter } from './app-router'

import './styles.css'
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from './features/auth/contexts/auth-context'

const rootElement = document.getElementById('root') as HTMLElement

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <StrictMode>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        storageKey="school-management-theme"
      >
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </ThemeProvider>
    </StrictMode>,
  )
}
