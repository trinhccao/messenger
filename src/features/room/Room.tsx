import { FunctionComponent, useEffect, useState } from 'react'
import Header from './Header'
import Compose from './Compose'
import { useMatch } from 'react-router-dom'
import api from '../../api/api'
import { useAppSelector } from '../../redux/hooks'
import { selectThreads } from '../../redux-slices/threads-slice'
import { useAppDispatch } from '../../redux/hooks'
import RoomMessage from './RoomMessage'

const Room: FunctionComponent = () => {
  const slug = useMatch('/chat/:id')?.params.id
  const [threadId, setThreadId] = useState<string>()
  const threads = useAppSelector(selectThreads)
  const currentThread = threads.find((item) => item._id === threadId)
  const dispatch = useAppDispatch()
  const messages = currentThread?.messages || []

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
          {messages.map((msg) => <RoomMessage message={msg} key={msg._id} />)}
        </div>
      </div>
    </div>
  )
}

export default Room
