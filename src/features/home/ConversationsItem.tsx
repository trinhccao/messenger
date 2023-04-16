import {
  FunctionComponent,
  MouseEvent,
} from 'react'
import AvatarLarge from './AvatarLarge'
import { useNavigate } from 'react-router-dom'
import { DataThread } from '../../models/DataThread'

interface ConversationsItemProps {
  thread: DataThread
}

const ConversationsItem: FunctionComponent<ConversationsItemProps> = (props) => {
  const { thread } = props
  const navigate = useNavigate()
  const path = `/chat/${thread.slug}`

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
            {thread.messages.slice(-1)[0]?.content}
          </p>
        </div>
      </a>
    </li>
  )
}

export default ConversationsItem
