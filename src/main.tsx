import { RouterProvider } from 'react-router-dom'

import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto-condensed/400.css'
import '@fontsource/roboto-condensed/700.css'

import { router } from './router/router'

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
