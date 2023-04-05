import { FunctionComponent, MouseEvent } from 'react'
import AvatarLarge from './AvatarLarge'
import { useNavigate } from 'react-router-dom'

interface ConversationItemProps {
  userId: string
}

const ConversationItem: FunctionComponent<ConversationItemProps> = (props) => {
  const navigate = useNavigate()
  const { userId } = props
  const path = `/chat/${userId}`

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <a className="conversation-link" href={path} onClick={onClick}>
      <AvatarLarge image="/images/dummy-1.jpg" isOnline={true} />
      <div className="conversation-link__content">
        <h3 className="heading-lv3">Phuong Anh</h3>
        <p className="conversation-link__message">This chat has ended.</p>
      </div>
    </a>
  )
}

export default ConversationItem
