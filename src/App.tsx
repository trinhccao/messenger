import { FunctionComponent } from 'react'
import Header from './header/Header'
import Conversation from './conversation/Conversation'
import Tab from './tab/Tab'
import People from './people/People'
import Room from './room/Room'
import HeaderRoom from './header/HeaderRoom'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Header hidden />
      <HeaderRoom />
      <Tab />
      <div className="app-content">
        <div className="app-content__inner">
          <Conversation hidden />
          <People hidden />
          <Room />
        </div>
      </div>
    </div>
  )
}

export default App
