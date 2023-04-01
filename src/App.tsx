import { FunctionComponent } from 'react'
import Header from './header/Header'
import Conversation from './conversation/Conversation'
import Tab from './tab/Tab'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Header />
      <Tab />
      <Conversation />
    </div>
  )
}

export default App
