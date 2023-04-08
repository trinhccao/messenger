import {
  FunctionComponent,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from 'react'
import AvatarLarge from './AvatarLarge'
import { useNavigate } from 'react-router-dom'
import { Thread, ThreadContext, ThreadTypes } from '../contexts/ThreadContext'
import axios from 'axios'
import { IUser } from '../interfaces/IUser'
import { AuthContext } from '../contexts/AuthContext'
import { IMessage } from '../interfaces/IMessage'

interface ConversationItemProps {
  thread: Thread
}

const ConversationItem: FunctionComponent<ConversationItemProps> = (props) => {
  const { thread } = props
  const navigate = useNavigate()
  const { authInfo } = useContext(AuthContext)
  const { setThreads } = useContext(ThreadContext)
  const [user, setUser] = useState<IUser>()
  const isDirect = thread.type === ThreadTypes.Direct
  const path = `/chat/${isDirect ? user?._id : thread._id}`
  const userFullName = user ? `${user.firstName} ${user.lastName}` : ''
  const [latestMessage, setLatestMessage] = useState<IMessage>()

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    setThreads?.((threads) => {
      const newThreads = threads.map((item) => {
        if (item === thread) {
          item.isActive = true
        } else {
          item.isActive = false
        }
        return item
      })
      return newThreads
    })
    navigate(path)
  }

  useEffect(() => {
    if (!isDirect) {
      return
    }
    const controller = new AbortController()
    const userId = thread.members.find((id) => id !== authInfo?.user._id)
    axios
      .get<IUser>(`/users/${userId}`, { signal: controller.signal })
      .then(({ data }) => setUser(data))
  }, [authInfo?.user, isDirect, thread.members])

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get<IMessage | undefined>(`/threads/${thread._id}/messages/latest`, {
        signal: controller.signal
      })
      .then(({ data }) => data && setLatestMessage(data))
    return () => controller.abort()
  }, [thread._id])

  return (
    <a className="conversation-link" href={path} onClick={onClick}>
      <AvatarLarge
        image={isDirect ? user?.avatar : thread.avatar}
        isOnline={true}
      />
      <div className="conversation-link__content">
        <h3 className="heading-lv3">{isDirect ? userFullName : thread.name}</h3>
        <p className="conversation-link__message">
          {latestMessage?.content || ''}
        </p>
      </div>
    </a>
  )
}

export default ConversationItem
