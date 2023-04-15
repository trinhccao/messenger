import { FunctionComponent, useEffect, useState } from 'react'
import Header from './Header'
import Compose from './Compose'
import Message from './Message'
import { useMatch } from 'react-router-dom'
import AvatarMessage from './AvatarMessage'
import { DataMessage } from '../../models/DataMessage'
import { DataThread } from '../../models/DataThread'
import api from '../../api/api'
import { DataUser } from '../../models/DataUser'
import { useAppSelector } from '../../redux/hooks'
import { selectAuth } from '../../redux-slices/auth-slice'

const Room: FunctionComponent = () => {
  const paramId = useMatch('/chat/:id')?.params.id
  const [thread, setThread] = useState<DataThread>()
  const auth = useAppSelector(selectAuth)
  const [users, setUsers] = useState<DataUser[]>([])
  const messages: DataMessage[] = []

  const renderMessage = (message: DataMessage) => {
    const own = message.userId === auth?.user._id
    const user = users.find((user) => user._id === message.userId)
    const src = user?.avatar || ''
    return (
      <Message message={message} own={own} key={message._id}>
        {!own && <AvatarMessage src={src} />}
      </Message>
    )
  }

  useEffect(() => {
    if (!paramId) { return }
    const controller = new AbortController()
    api.chat.findById(paramId, controller).then((thread) => setThread(thread))
    return () => controller.abort()
  }, [paramId])

  useEffect(() => {
    const controller = new AbortController()
    api.users.findAll(controller).then((users) => setUsers(users))
    return () => controller.abort()
  }, [])

  if (!thread) {
    return null
  }

  return (
    <div className="room">
      <Header thread={thread} />
      <Compose thread={thread} />
      <div className="room__content">
        <div className="container">
          {messages.map((message) => renderMessage(message))}
        </div>
      </div>
    </div>
  )
}

export default Room