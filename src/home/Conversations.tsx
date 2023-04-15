import { FunctionComponent } from 'react'
import ConversationsItem from './ConversationsItem'
import { useAppSelector } from '../app/hooks'
import { selectConversations } from '../slices/conversations-slice'

const Conversations: FunctionComponent = () => {
  const conversations = useAppSelector(selectConversations)

  return (
    <ul className="conversations">
      {conversations.map((thread) => (
        <ConversationsItem thread={thread} key={thread._id} />
      ))}
    </ul>
  )
}

export default Conversations
