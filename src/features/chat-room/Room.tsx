import { FunctionComponent, useContext, useEffect, useState } from 'react'
import Header from './Header'
import Compose from '../compose/Compose'
import Message from './Message'
import { useMatch } from 'react-router-dom'
import AvatarMessage from './AvatarMessage'
import { DataMessage } from '../../models/DataMessage'
import { DataThread } from '../../models/DataThread'
import { AuthContext } from '../../contexts/AuthContext'
import api from '../../api/api'
import { MessagesContext } from '../../contexts/MessagesContext'

const Room: FunctionComponent = () => {
  const paramId = useMatch('/chat/:id')?.params.id
  const [thread, setThread] = useState<DataThread>()
  const messages = useContext(MessagesContext).messages[thread?._id || ''] || []
  const { authInfo } = useContext(AuthContext)

  const renderMessage = (message: DataMessage) => {
    const own = message.userId === authInfo?.user._id
    return (
      <Message message={message} own={own} key={message._id}>
        {!own && <AvatarMessage userId={message.userId} />}
      </Message>
    )
  }

  useEffect(() => {
    if (!paramId) { return }
    const controller = new AbortController()
    api.chat.findById(paramId, controller).then((thread) => setThread(thread))
    return () => controller.abort()
  }, [paramId])

  if (!thread) {
    return null
  }

  return (
    <div className="app__content">
      <Header thread={thread} />
      <Compose thread={thread} />
      <div className="app-content">
        <div className="app-content__inner">
          <div className="room">
            <div className="container">
              {messages.map((message) => renderMessage(message))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Room
