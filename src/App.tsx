import { FunctionComponent } from 'react'
import Main from './main/Main'
import Room from './room/Room'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Main />
      <Room hidden />
    </div>
  )
}

export default App
