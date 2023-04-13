import { FunctionComponent } from 'react'
import Header from './Header'
import Search from './Search'
import OnlineBar from './OnlineBar'
import Conversations from './Conversations'
import { DataUser } from '../models/DataUser'

interface ChatProps {
  hidden: boolean
  users: DataUser[]
}

const Chat: FunctionComponent<ChatProps> = ({ hidden, users }) => {
  return (
    <div className="chat" hidden={hidden}>
      <Header />
      <Search users={users} />
      <OnlineBar />
      <Conversations />
    </div>
  )
}

export default Chat
