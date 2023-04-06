import { FunctionComponent, MouseEvent, useContext, useEffect, useState } from 'react'
import AvatarLarge from './AvatarLarge'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../interfaces/IUser'
import axios from 'axios'
import { Thread } from './Conversation'
import { AuthContext } from '../contexts/AuthContext'

interface ConversationItemProps {
  thread: Thread
}

const ConversationItem: FunctionComponent<ConversationItemProps> = (props) => {
  const { thread } = props
  const navigate = useNavigate()
  const [threadName, setThreadName] = useState<string>()
  const [threadAvatar, setThreadAvatar] = useState<string>()
  const { authInfo } = useContext(AuthContext)
  const userId = thread.members.find((id) => id !== authInfo?.user._id)

  const path = thread.type === 'direct'
    ? `/directs/to/${userId}`
    : `/threads/${thread._id}/messages`

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  useEffect(() => {
    if (thread.type === 'thread') {
      return
    }
    const constroler = new AbortController()
    axios
      .get<IUser>(`/users/${userId}`, { signal: constroler.signal })
      .then(({ data }) => {
        setThreadAvatar(data.avatar)
        setThreadName(`${data.firstName} ${data.lastName}`)
      })
    return () => constroler.abort()
  }, [userId, thread.type])

  return (
    <a className="conversation-link" href={path} onClick={onClick}>
      <AvatarLarge image={threadAvatar} isOnline={true} />
      <div className="conversation-link__content">
        <h3 className="heading-lv3">{threadName}</h3>
        <p className="conversation-link__message">This chat has ended.</p>
      </div>
    </a>
  )
}

export default ConversationItem
