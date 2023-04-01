import { FunctionComponent } from 'react'
import Header from './header/Header'
import Search from './search/Search'
import Online from './online/Online'
import Conversation from './conversation/Conversation'
import Nav from './nav/Nav'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Search />
      </div>
      <Online />
      <div className="container">
        <Conversation />
        <Nav />
      </div>
    </div>
  )
}

export default App
