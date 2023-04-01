import { FunctionComponent } from 'react'
import Header from './header/Header'
import Conversation from './conversation/Conversation'
import Tab from './tab/Tab'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Header />
      <Tab />
      <div className="app-content">
        <div className="app-content__inner">
          <Conversation />
        </div>
      </div>
    </div>
  )
}

export default App
