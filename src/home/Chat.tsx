import { FunctionComponent } from 'react'
import Header from './Header'
import Search from './Search'
import OnlineBar from './OnlineBar'
import Conversations from './Conversations'

interface ChatProps {
  hidden: boolean
}

const Chat: FunctionComponent<ChatProps> = ({ hidden }) => {
  return (
    <div className="chat" hidden={hidden}>
      <Header />
      <Search />
      <OnlineBar />
      <Conversations />
    </div>
  )
}

export default Chat
