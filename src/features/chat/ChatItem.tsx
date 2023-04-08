import {
  FunctionComponent,
  MouseEvent,
  useEffect,
  useState,
} from 'react'
import AvatarLarge from '../../common/AvatarLarge'
import { useNavigate } from 'react-router-dom'
import { DataMessage } from '../../models/DataMessage'
import axios from 'axios'
import { DataThread } from '../../models/DataThread'

interface ChatItemProps {
  threadId: string
  messages: DataMessage[]
}

const ChatItem: FunctionComponent<ChatItemProps> = (props) => {
  const { threadId, messages } = props
  const navigate = useNavigate()
  const [thread, setThread] = useState<DataThread>()
  const [loading, setLoading] = useState(true)

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get(`/threads/${threadId}`, { signal: controller.signal })
      .then(({ data }) => setThread(data))
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [threadId])

  return (
    <a className="conversation-link" href={'path'} onClick={onClick}>
      <AvatarLarge
        image={'isDirect ? user?.avatar : thread.avatar'}
        isOnline={true}
      />
      <div className="conversation-link__content">
        <h3 className="heading-lv3">{'isDirect ? userFullName : thread.name'}</h3>
        <p className="conversation-link__message">
          {'latestMessage?.content' || ''}
        </p>
      </div>
    </a>
  )
}

export default ChatItem
