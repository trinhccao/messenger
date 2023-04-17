import {
  FunctionComponent,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { Socket, io } from 'socket.io-client'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { selectAuth } from '../redux-slices/auth-slice'
import { setClientIds, setConnected } from '../redux-slices/socket-slice'
import { ThreadMessage } from '../types/DataThread'
import { addMessage, addThread, selectThreads } from '../redux-slices/threads-slice'
import api from '../api/api'

interface SocketProviderProps {
  children: ReactNode
}

interface SocketContextState {
  socket: Socket | null
}

const SocketContext = createContext<SocketContextState>({ socket: null })
const SocketProvider: FunctionComponent<SocketProviderProps> = (props) => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const auth = useAppSelector(selectAuth)
  const threads = useAppSelector(selectThreads)
  const dispatch = useAppDispatch()
  const token = auth?.token

  useEffect(() => {
    if (!token) {
      return
    }

    const host = process.env.REACT_APP_WS_HOST as string
    const socket = io(host, { auth: { token } })
    socket.on('connect', () => dispatch(setConnected(true)))
    socket.on('disconnect', () => dispatch(setConnected(false)))
    socket.on('clients', (ids: string[]) => dispatch(setClientIds(ids)))
    socket.on('message', async (message: ThreadMessage) => {
      let thread = threads.find((item) => item._id === message.threadId)
      if (!thread) {
        thread = await api.threads.findById(message._id)
      }
      dispatch(addThread(thread))
      dispatch(addMessage(message))
    })
    setSocket(socket)

    return () => {
      socket.offAny()
      dispatch(setConnected(false))
      dispatch(setClientIds([]))
      socket.close()
      setSocket(null)
    }
  }, [token, dispatch, threads])

  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  )
}

export { SocketContext, SocketProvider }
