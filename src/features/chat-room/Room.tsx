import { FunctionComponent, useState } from 'react'
import Header from './Header'
import Compose from '../compose/Compose'
import { DataMessage } from '../../models/DataMessage'
import Message from './Message'
import { useMatch } from 'react-router-dom'
import { DataThread } from '../../models/DataThread'

const Room: FunctionComponent = () => {
  const [thread, setThread] = useState<DataThread>()
  const [messages, setMessages] = useState<DataMessage[]>([])
  const paramId = useMatch('/chat/:id')?.params.id

  return (
    <div className="app-viewport">
      <Header thread={thread} />
      <Compose thread={thread} />
      <div className="app-content">
        <div className="app-content__inner">
          <div className="room">
            <div className="container">
              {messages.map((message) => (
                <Message message={message} key={message._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Room
