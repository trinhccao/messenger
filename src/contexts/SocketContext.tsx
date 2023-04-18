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
import {
  selectSocket,
  setClientIds,
  setConnected,
} from '../redux-slices/socket-slice'
import { ThreadMessage } from '../types/DataThread'
import {
  addMessage,
  addThread,
  selectThreads,
} from '../redux-slices/threads-slice'
import api from '../api/api'
import { addUser, selectUsers } from '../redux-slices/users-slice'

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
  const { clientIds } = useAppSelector(selectSocket)
  const users = useAppSelector(selectUsers)
  const threads = useAppSelector(selectThreads)
  const dispatch = useAppDispatch()
  const token = auth?.token

  useEffect(() => {
    if (!token) {
      return
    }

    const host = process.env.REACT_APP_WS_HOST as string
    const socket = io(host, { auth: { token } })
    setSocket(socket)

    return () => {
      socket.offAny()
      dispatch(setConnected(false))
      dispatch(setClientIds([]))
      socket.close()
      setSocket(null)
    }
  }, [token, dispatch])

  useEffect(() => {
    socket?.on('connect', () => dispatch(setConnected(true)))
    socket?.on('disconnect', () => dispatch(setConnected(false)))
    socket?.on('message', async (message: ThreadMessage) => {
      const localThread = threads.find((item) => item._id === message.threadId)
      if (localThread) {
        dispatch(addMessage(message))
      } else {
        const thread = await api.threads.findById(message.threadId)
        dispatch(addThread(thread))
      }
    })
    socket?.on('clients', (ids: string[]) => dispatch(setClientIds(ids)))
  }, [dispatch, socket, threads])

  useEffect(() => {
    const newId = clientIds.find((id) => users.every((user) => user._id !== id))
    if (!newId) {
      return
    }
    const controller = new AbortController()
    api.users
      .findById(newId, controller)
      .then((user) => dispatch(addUser(user)))
    return () => controller.abort()
  }, [clientIds, users, dispatch])

  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  )
}

export { SocketContext, SocketProvider }
