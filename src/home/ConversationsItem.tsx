import {
  FunctionComponent,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from 'react'
import AvatarLarge from '../common/AvatarLarge'
import { useNavigate } from 'react-router-dom'
import { DataMessage } from '../models/DataMessage'
import axios from 'axios'
import { DataThread, ThreadTypes } from '../models/DataThread'
import { DataUser } from '../models/DataUser'
import { AuthContext } from '../contexts/AuthContext'

interface ConversationsItemProps {
  threadId: string
  messages: DataMessage[]
}

const ConversationsItem: FunctionComponent<ConversationsItemProps> = (props) => {
  const { threadId, messages } = props
  const navigate = useNavigate()
  const [thread, setThread] = useState<DataThread>()
  const [user, setUser] = useState<DataUser>()
  const userFullName = user ? `${user?.firstName} ${user?.lastName}` : ''
  const { authInfo } = useContext(AuthContext)
  const isDirect = thread?.type === ThreadTypes.Direct
  const path = `/chat/${isDirect ? user?._id : thread?._id}`

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get<DataThread>(`/threads/${threadId}`, { signal: controller.signal })
      .then(({ data }) => setThread(data))
    return () => controller.abort()
  }, [threadId])

  useEffect(() => {
    if (!isDirect) {
      return
    }
    const controller = new AbortController()
    const userId = thread.members.find((id) => id !== authInfo?.user._id)
    axios
      .get<DataUser>(`/users/${userId}`, { signal: controller.signal })
      .then(({ data }) => setUser(data))
    return () => controller.abort()
  }, [threadId, authInfo?.user._id, thread?.members, isDirect])

  return (
    <li>
      <a className="conversations__item" href={path} onClick={onClick}>
        <AvatarLarge
          image={isDirect ? user?.avatar : thread?.avatar}
          isOnline={true}
        />
        <div className="conversations__item-content">
          <h3 className="heading-lv3">
            {isDirect ? userFullName : thread?.name || ''}
          </h3>
          <p className="conversations__item-message">
            {messages.slice(-1)[0]?.content || ''}
          </p>
        </div>
      </a>
    </li>
  )
}

export default ConversationsItem
