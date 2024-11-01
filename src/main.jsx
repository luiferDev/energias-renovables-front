import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EJemplo2 from './EJemplo2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App />
    <App />
    <EJemplo2 hola={"Hola"} />
  </StrictMode>
)
