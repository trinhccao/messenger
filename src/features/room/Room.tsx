import { FunctionComponent, useEffect, useState } from 'react'
import Header from './Header'
import Compose from './Compose'
import Message from './Message'
import { useMatch } from 'react-router-dom'
import AvatarMessage from './AvatarMessage'
import { DataMessage } from '../../models/DataMessage'
import api from '../../api/api'
import { useAppSelector } from '../../redux/hooks'
import { selectAuth } from '../../redux-slices/auth-slice'
import { selectConversations } from '../../redux-slices/conversations-slice'
import { selectUsers } from '../../redux-slices/users-slice'

const Room: FunctionComponent = () => {
  const paramId = useMatch('/chat/:id')?.params.id
  const [threadId, setThreadId] = useState<string>()
  const auth = useAppSelector(selectAuth)
  const users = useAppSelector(selectUsers)
  const conversations = useAppSelector(selectConversations)
  const conv = conversations.find((item) => item.thread._id === threadId)

  const renderMessage = (message: DataMessage) => {
    const own = message.userId === auth?.user._id
    const user = users.find(({ _id }) => _id === message.userId)
    return (
      <Message message={message} own={own} key={message._id}>
        {!own && <AvatarMessage src={user?.avatar || ''} />}
      </Message>
    )
  }

  useEffect(() => {
    if (!paramId) { return }
    const controller = new AbortController()
    api.chat
      .findById(paramId, controller)
      .then((thread) => setThreadId(thread._id))
    return () => controller.abort()
  }, [paramId])

  if (!conv) {
    return null
  }

  return (
    <div className="room">
      <Header thread={conv.thread} />
      <Compose thread={conv.thread} />
      <div className="room__content">
        <div className="container">
          {conv.messages.map((message) => renderMessage(message))}
        </div>
      </div>
    </div>
  )
}

export default Room
