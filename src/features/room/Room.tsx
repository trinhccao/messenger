import { FunctionComponent, useEffect, useState } from 'react'
import Header from './Header'
import Compose from './Compose'
import Message from './Message'
import { useMatch } from 'react-router-dom'
import AvatarMessage from './AvatarMessage'
import api from '../../api/api'
import { useAppSelector } from '../../redux/hooks'
import { selectAuth } from '../../redux-slices/auth-slice'
import { selectThreads } from '../../redux-slices/threads-slice'
import { selectUsers } from '../../redux-slices/users-slice'
import { useAppDispatch } from '../../redux/hooks'

const Room: FunctionComponent = () => {
  const slug = useMatch('/chat/:id')?.params.id
  const [threadId, setThreadId] = useState<string>()
  const auth = useAppSelector(selectAuth)
  const users = useAppSelector(selectUsers)
  const threads = useAppSelector(selectThreads)
  const currentThread = threads.find((item) => item._id === threadId)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!slug) { return }
    const controller = new AbortController()
    api.chat.findThreadId(slug, controller).then((id) => setThreadId(id))
    return () => controller.abort()
  }, [dispatch, slug])

  if (!currentThread) {
    return null
  }

  return (
    <div className="room">
      <Header thread={currentThread} />
      <Compose thread={currentThread} />
      <div className="room__content">
        <div className="container">
          {currentThread.messages.map((message) => {
            const own = message.userId === auth?.user._id
            const user = users.find(({ _id }) => _id === message.userId)
            return (
              <Message message={message} own={own} key={message._id}>
                {!own && <AvatarMessage src={user?.avatar || ''} />}
              </Message>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Room
