import { FunctionComponent } from 'react'
import { RouterProvider } from 'react-router-dom'
import root from './router/root'
import './configs/axios'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <RouterProvider router={root} />
    </div>
  )
}

export default App
