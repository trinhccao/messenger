import { FunctionComponent } from 'react'
import ChatItem from './ChatItem'
import Search from '../search/Search'
import OnlineBar from '../onlinebar/OnlineBar'
import { Conversation } from '../../contexts/ConversationsContext'

interface ChatProps {
  conversations: Conversation
}

const Chat: FunctionComponent<ChatProps> = ({ conversations }) => {

  return (
    <div className="conversation">
      <Search />
      <OnlineBar />
      <ul className="conversation__list">
        {Object.entries(conversations).map(([threadId, messages]) => (
          <li key={threadId}>
            <ChatItem threadId={threadId} messages={messages} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Chat
