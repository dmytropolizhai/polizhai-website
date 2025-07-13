
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeModeProvider } from "@app/providers/ThemeModeProvider.tsx";


import App from './App.tsx'

import './styles/shortcuts.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeModeProvider>
          <App />
      </ThemeModeProvider>
  </StrictMode>,
)
