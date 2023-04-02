import { FunctionComponent, useState } from 'react'
import Main from './main/Main'
import Room from './room/Room'
import { Scenes } from './settings/app-config'

const App: FunctionComponent = () => {
  const [activeScene, setActiveScene] = useState(Scenes.Main)

  return (
    <div className="app">
      <Main activeScene={activeScene} setActiveScene={setActiveScene} />
      <Room activeScene={activeScene} setActiveScene={setActiveScene} />
    </div>
  )
}

export default App
