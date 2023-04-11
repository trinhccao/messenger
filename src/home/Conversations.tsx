import { FunctionComponent, useContext } from 'react'
import ConversationsItem from './ConversationsItem'
import { ConversationsContext } from '../contexts/ConversationsContext'

const Conversations: FunctionComponent = () => {
  const { conversations } = useContext(ConversationsContext)
  const conversationsArr = Object.entries(conversations)

  return (
    <ul className="conversations">
      {conversationsArr.map(([id, messages]) => (
        <ConversationsItem threadId={id} messages={messages} key={id} />
      ))}
    </ul>
  )
}

export default Conversations
