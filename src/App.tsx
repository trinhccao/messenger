import { FunctionComponent } from 'react'
import { RouterProvider } from 'react-router-dom'
import root from './router/root'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <RouterProvider router={root} />
    </div>
  )
}

export default App
