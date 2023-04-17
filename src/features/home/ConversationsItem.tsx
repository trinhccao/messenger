import {
  FunctionComponent,
  MouseEvent,
} from 'react'
import AvatarLarge from './AvatarLarge'
import { useNavigate } from 'react-router-dom'
import { DataThread, ThreadTypes } from '../../types/DataThread'
import { useAppSelector } from '../../redux/hooks'
import { selectSocket } from '../../redux-slices/socket-slice'

interface ConversationsItemProps {
  thread: DataThread
}

const ConversationsItem: FunctionComponent<ConversationsItemProps> = (props) => {
  const { thread } = props
  const navigate = useNavigate()
  const path = `/chat/${thread.slug}`
  const socket = useAppSelector(selectSocket)
  let isOnline = false

  if (thread.type === ThreadTypes.Direct) {
    isOnline = socket.clientIds.some((id) => id === thread.slug)
  }

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <li>
      <a className="conversations__item" href={path} onClick={onClick}>
        <AvatarLarge image={thread.avatar} isOnline={isOnline} />
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
