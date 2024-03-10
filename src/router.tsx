import { createBrowserRouter } from 'react-router-dom'

import { ROOT } from 'constants/routePaths'

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <div>Hello world!</div>
  }
])

export default router
