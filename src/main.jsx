import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './Components/Error-Page.jsx'
import ActualizarSolar from './Components/ActualizarSolar.jsx'
import Biomasa from './Components/Biomasa.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/biomasa",
    element: <Biomasa />
  },
  {
    path: "/actualizar/:id",
    element: <ActualizarSolar />
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme accentColor="crimson"
      grayColor="gray" radius="full" scaling="100%"
      panelBackground="solid"
      appearance="dark" >
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>
)
