import { createBrowserRouter } from 'react-router-dom'

import { App } from '../App'
import { Content } from '../page/content/Content'
import { Info } from '../page/info/Info'

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <Info />,
        path: '/info',
      },
      {
        element: <Content />,
        path: '/',
      },
    ],
    element: <App />,
    errorElement: <h2>404: СТРАНИЦА НЕ НАЙДЕНА...ОШИБКА!</h2>,
    path: '/',
  },
])
