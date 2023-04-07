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

interface ConversationItemProps {
  thread: Thread
}

const ConversationItem: FunctionComponent<ConversationItemProps> = (props) => {
  const { thread } = props
  const { authInfo } = useContext(AuthContext)
  const { setThreads } = useContext(ThreadContext)
  const [user, setUser] = useState<IUser>()
  const isUser = thread.type === ThreadTypes.Direct
  const path = `/chat/${user?._id || thread._id}`
  const navigate = useNavigate()

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
    if (!isUser) {
      return
    }
    const controller = new AbortController()
    const userId = thread.members.find((id) => id !== authInfo?.user._id)
    axios
      .get<IUser>(`/users/${userId}`, { signal: controller.signal })
      .then(({ data }) => setUser(data))
  }, [authInfo?.user, isUser, thread.members])

  return (
    <a className="conversation-link" href={path} onClick={onClick}>
      <AvatarLarge image={thread.avatar || user?.avatar} isOnline={true} />
      <div className="conversation-link__content">
        <h3 className="heading-lv3">
          {thread.name || `${user?.firstName} ${user?.lastName}`}
        </h3>
        <p className="conversation-link__message">This chat has ended.</p>
      </div>
    </a>
  )
}

export default ConversationItem
