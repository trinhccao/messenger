import { FunctionComponent } from 'react'
import Header from './Header'
import Search from './Search'
import OnlineBar from './OnlineBar'
import Conversations from './Conversations'

const Chat: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Search />
      <OnlineBar />
      <Conversations />
    </>
  )
}

export default Chat
