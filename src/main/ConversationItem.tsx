import { FunctionComponent, MouseEvent, useEffect, useState } from 'react'
import AvatarLarge from './AvatarLarge'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../interfaces/IUser'
import axios from 'axios'

interface ConversationItemProps {
  userId: string
}

const ConversationItem: FunctionComponent<ConversationItemProps> = (props) => {
  const navigate = useNavigate()
  const { userId } = props
  const path = `/chat/${userId}`
  const [user, setUser] = useState<IUser>()

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  useEffect(() => {
    const abortController = new AbortController()
    axios
      .get<IUser>(`/users/${userId}`, { signal: abortController.signal })
      .then(({ data }) => setUser(data))
    return () => abortController.abort()
  }, [userId])

  if (!user) {
    return null
  }

  return (
    <a className="conversation-link" href={path} onClick={onClick}>
      <AvatarLarge image={user.avatar || ''} isOnline={true} />
      <div className="conversation-link__content">
        <h3 className="heading-lv3">{user.firstName} {user.lastName}</h3>
        <p className="conversation-link__message">This chat has ended.</p>
      </div>
    </a>
  )
}

export default ConversationItem
