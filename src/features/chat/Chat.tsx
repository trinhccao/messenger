import { FunctionComponent, useContext } from 'react'
import ChatItem from './ChatItem'
import Search from '../search/Search'
import OnlineBar from '../onlinebar/OnlineBar'
import { ConversationsContext } from '../../contexts/ConversationsContext'

const Chat: FunctionComponent = () => {
  const { conversations } = useContext(ConversationsContext)

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
