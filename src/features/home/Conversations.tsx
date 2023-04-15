import { FunctionComponent } from 'react'
import ConversationsItem from './ConversationsItem'
import { useAppSelector } from '../../redux/hooks'
import { selectConversations } from '../../redux-slices/conversations-slice'

const Conversations: FunctionComponent = () => {
  const conversations = useAppSelector(selectConversations)
  const visibleConvs = conversations.filter((item) => item.messages.length)

  return (
    <ul className="conversations">
      {visibleConvs.map((conversation) => (
        <ConversationsItem
          conversation={conversation}
          key={conversation.thread._id}
        />
      ))}
    </ul>
  )
}

export default Conversations
