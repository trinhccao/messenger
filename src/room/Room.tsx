import { FunctionComponent, useState } from 'react'
import AvatarMessage from './AvatarMessage'
import Header from './Header'
import Compose from './Compose'
import { useMatch } from 'react-router'
import { IMessage } from '../interfaces/IMessage'
import { TokenResponse } from '../interfaces/TokenResponse'

const Room: FunctionComponent = () => {
  const match = useMatch('/chat/:receiver')
  const receiver = match?.params.receiver
  const [messages, setMessages] = useState<IMessage[]>([])
  const token = window.localStorage.getItem('token') || ''
  const currentUser = (JSON.parse(token) as TokenResponse).user

  const renderMessage = (message: IMessage) => {
    const messageClassNames =
      currentUser._id === message.userId
      ? 'message message--out'
      : 'message message--in'
    return (
      <div className="message-row" key={message._id}>
        <AvatarMessage userId={message.userId} />
        <div className="message-group">
          <div className={messageClassNames}>{message.content}</div>
        </div>
      </div>
    )
  }

  if (!receiver) {
    return null
  }

  return (
    <div className="app-viewport">
      <Header userId={receiver} />
      <Compose />
      <div className="app-content">
        <div className="room">
          <div className="container">
            {messages.map((message) => renderMessage(message))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Room
