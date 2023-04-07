import {
  FunctionComponent,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from 'react'
import AvatarLarge from './AvatarLarge'
import { Thread, ThreadTypes } from './Conversation'
import { AuthContext } from '../contexts/AuthContext'
import { IUser } from '../interfaces/IUser'
import axios from 'axios'

interface ConversationItemProps {
  thread: Thread
}

const ConversationItem: FunctionComponent<ConversationItemProps> = (props) => {
  const { thread } = props
  const [user, setUser] = useState<IUser>()
  const { authInfo } = useContext(AuthContext)
  const isDirect = thread.type === ThreadTypes.Direct
  const currentUserId = authInfo?.user._id

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (!isDirect) {
      return
    }
    const controller = new AbortController()
    const targetId = thread.members.find((item) => item !== currentUserId)
    axios
      .get<IUser>(`/users/${targetId}`, { signal: controller.signal })
      .then(({ data }) => setUser(data))
  }, [currentUserId, isDirect, thread.members])

  return (
    <a className="conversation-link" href="/" onClick={onClick}>
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
