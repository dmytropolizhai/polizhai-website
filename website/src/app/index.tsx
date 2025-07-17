import './styles/shortcuts.scss'
import './styles/typography.scss'


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeModeProvider } from "@app/providers/ThemeModeProvider.tsx";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeModeProvider>
          <App />
      </ThemeModeProvider>
  </StrictMode>,
)

