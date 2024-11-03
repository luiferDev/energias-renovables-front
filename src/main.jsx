import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme accentColor="crimson"
      grayColor="gray" radius="full" scaling="100%"
      panelBackground="solid"
      appearance="dark" >
      <App />
    </Theme>
  </StrictMode>
)
