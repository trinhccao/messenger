import { FunctionComponent } from 'react'
import Avatar from './Avatar'

const ConversationItem: FunctionComponent = () => {
  return (
    <a className="conversation-link" href="#none">
      <Avatar image="/images/dummy-1.jpg" isOnline={true} />
      <div className="conversation-link__content">
        <h3 className="heading-lv3">Phuong Anh</h3>
        <p className="conversation-link__message">This chat has ended.</p>
      </div>
    </a>
  )
}

export default ConversationItem
