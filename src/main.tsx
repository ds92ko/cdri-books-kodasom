import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/app.tsx'
import '@/styles/fonts.css.ts'
import '@/styles/reset.css.ts'
import '@/styles/typography.css.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
