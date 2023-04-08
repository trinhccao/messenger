import { FunctionComponent, useContext, useEffect, useState } from 'react'
import Header from './Header'
import Compose from './Compose'
import { IMessage } from '../interfaces/IMessage'
import Message from './Message'
import { Thread, ThreadTypes } from '../contexts/ThreadContext'
import axios from 'axios'
import { useMatch } from 'react-router-dom'
import { SocketContext } from '../contexts/SocketContext'

const Room: FunctionComponent = () => {
  const [thread, setThread] = useState<Thread>()
  const [messages, setMessages] = useState<IMessage[]>([])
  const paramId = useMatch('/chat/:id')?.params.id
  const { socketio } = useContext(SocketContext)

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get<Thread | null>(`/chat/${paramId}`, { signal: controller.signal })
      .then(async ({ data }) => {
        if (data) {
          return setThread(data)
        }
        const res = await axios.post<Thread>('/threads',
          { type: ThreadTypes.Direct, receiverId: paramId },
          { signal: controller.signal }
        )
        setThread(res.data)
      })
    return () => controller.abort()
  }, [paramId])

  useEffect(() => {
    if (!thread?._id) {
      return
    }
    const controller = new AbortController()
    axios
      .get<IMessage[]>(`/threads/${thread._id}/messages`, {
        signal: controller.signal
      })
      .then(({ data }) => setMessages(data))
    return () => controller.abort()
  }, [thread?._id])


  useEffect(() => {
    if (!socketio) {
      return
    }
    socketio.on('message', (message: IMessage) => {
      if (message.threadId !== thread?._id) {
        return
      }
      setMessages((messages) => [...messages, message])
    })
  }, [socketio, thread?._id])

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
