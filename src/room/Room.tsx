import { FunctionComponent, useState } from 'react'
import Header from './Header'
import Compose from './Compose'
import { IMessage } from '../interfaces/IMessage'
import Message from './Message'

const Room: FunctionComponent = () => {
  const [messages, setMessages] = useState<IMessage[]>([])

  return (
    <div className="app-viewport">
      {/* <Header userId={receiver} /> */}
      {/* <Compose /> */}
      <div className="app-content">
        <div className="room">
          <div className="container">
            {messages.map((message) => <Message />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Room
