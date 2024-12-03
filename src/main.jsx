import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page from './page'
import './index.css'
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)