import { FunctionComponent, MouseEvent } from 'react'
import AvatarLarge from './AvatarLarge'

interface ConversationItemProps {
  onClick: (e: MouseEvent) => void
}

const ConversationItem: FunctionComponent<ConversationItemProps> = (props) => {
  const { onClick } = props

  return (
    <a className="conversation-link" href="#none" onClick={(e) => onClick(e)}>
      <AvatarLarge image="/images/dummy-1.jpg" isOnline={true} />
      <div className="conversation-link__content">
        <h3 className="heading-lv3">Phuong Anh</h3>
        <p className="conversation-link__message">This chat has ended.</p>
      </div>
    </a>
  )
}

export default ConversationItem
