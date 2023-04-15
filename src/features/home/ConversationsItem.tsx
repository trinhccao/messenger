import {
  FunctionComponent,
  MouseEvent,
} from 'react'
import AvatarLarge from './AvatarLarge'
import { useNavigate } from 'react-router-dom'
import { DataConversation } from '../../models/DataConversation'

interface ConversationsItemProps {
  conversation: DataConversation
}

const ConversationsItem: FunctionComponent<ConversationsItemProps> = (props) => {
  const { conversation } = props
  const { thread, messages } = conversation
  const navigate = useNavigate()
  const path = `/chat/${conversation.thread.slug}`

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <li>
      <a className="conversations__item" href={path} onClick={onClick}>
        <AvatarLarge image={thread.avatar} isOnline={true} />
        <div className="conversations__item-content">
          <h3 className="heading-lv3">{thread.name}</h3>
          <p className="conversations__item-message">
            {messages.slice(-1)[0]?.content}
          </p>
        </div>
      </a>
    </li>
  )
}

export default ConversationsItem
