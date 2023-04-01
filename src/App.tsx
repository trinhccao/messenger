import { FunctionComponent } from 'react'
import Header from './header/Header'
import Search from './search/Search'
import Online from './online/Online'
import Conversation from './conversation/Conversation'
import Tab from './tab/Tab'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Header />
      <Tab />
      <Search />
      <Online />
      <Conversation />
    </div>
  )
}

export default App
