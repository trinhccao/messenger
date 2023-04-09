import { FunctionComponent, useContext, useEffect, useState } from 'react'
import Header from './Header'
import Compose from '../compose/Compose'
import Message from './Message'
import { useMatch } from 'react-router-dom'
import useThread from '../../hooks/useThread'
import { AuthContext } from '../../contexts/AuthContext'
import { DataUser } from '../../models/DataUser'
import axios from 'axios'
import AvatarMessage from './AvatarMessage'
import { DataMessage } from '../../models/DataMessage'
import { ConversationsContext } from '../../contexts/ConversationsContext'

const Room: FunctionComponent = () => {
  const { conversations } = useContext(ConversationsContext)
  const paramId = useMatch('/chat/:id')?.params.id
  const { thread } = useThread(paramId as string)
  const { authInfo } = useContext(AuthContext)
  const [directUser, setDirectUser] = useState<DataUser>()
  const messages = conversations[thread?._id || ''] || []

  const renderMessage = (message: DataMessage) => {
    const own = message.userId === authInfo?.user._id
    return (
      <Message message={message} own={own} key={message._id}>
        {(!own && directUser) && <AvatarMessage user={directUser} />}
      </Message>
    )
  }

  useEffect(() => {
    if (!thread?._id || !authInfo) {
      return
    }
    const controller = new AbortController()
    const receiverId = thread.members.find((id) => id !== authInfo.user._id)
    axios
      .get<DataUser>(`/users/${receiverId}`, { signal: controller.signal })
      .then(({ data }) => setDirectUser(data))
  }, [thread, authInfo])

  return (
    <div className="app-viewport">
      <Header thread={thread} directUser={directUser} />
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
