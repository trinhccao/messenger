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
  const navigate = useNavigate()
  const { authInfo } = useContext(AuthContext)
  const { setThreads } = useContext(ThreadContext)
  const [user, setUser] = useState<IUser>()
  const isDirect = thread.type === ThreadTypes.Direct
  const path = `/chat/${isDirect ? user?._id : thread._id}`
  const userFullName = user ? `${user.firstName} ${user.firstName}` : ''

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

  return (
    <a className="conversation-link" href={path} onClick={onClick}>
      <AvatarLarge
        image={isDirect ? user?.avatar : thread.avatar}
        isOnline={true}
      />
      <div className="conversation-link__content">
        <h3 className="heading-lv3">{isDirect ? userFullName : thread.name}</h3>
        <p className="conversation-link__message">This chat has ended.</p>
      </div>
    </a>
  )
}

export default ConversationItem
