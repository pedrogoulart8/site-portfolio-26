import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'

console.log(
  '%cOpa, tudo bom? 👀',
  'color: #10b981; font-size: 20px; font-weight: bold;'
)
console.log(
  '%cSe você chegou até aqui já é boa notícia. Vamos bater um papo?',
  'color: #e6edf3; font-size: 14px;'
)
console.log(
  '%c→ pedromgoulartt@gmail.com',
  'color: #10b981; font-size: 14px;'
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
