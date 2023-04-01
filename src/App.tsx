import { FunctionComponent } from 'react'
import Header from './header/Header'
import Search from './search/Search'
import Online from './online/Online'
import Conversation from './conversation/Conversation'
import Nav from './nav/Nav'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Header />
      <Search />
      <Online />
      <Conversation />
      <Nav />
    </div>
  )
}

export default App
