import {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import io, { Socket } from 'socket.io-client'
import { AuthContext } from './AuthContext'
import { DataMessage } from '../models/DataMessage'
import { ConversationsContext } from './ConversationsContext'
import { DataUser } from '../models/DataUser'

interface SocketProviderProps {
  children: ReactNode
}

interface SocketContextProps {
  socket?: Socket
  connected: boolean
  onlines: DataUser[]
}

const SocketContext = createContext<SocketContextProps>({
  connected: false,
  onlines: [],
})

const SocketProvider: FunctionComponent<SocketProviderProps> = ({
  children
}) => {
  const { authInfo } = useContext(AuthContext)
  const [socket, setSocket] = useState<Socket>()
  const [connected, setConnected] = useState(false)
  const { dispatch } = useContext(ConversationsContext)
  const [onlines, setOnlines] = useState<DataUser[]>([])

  useEffect(() => {
    if (!authInfo) {
      return
    }
    const socket = io(process.env.REACT_APP_API_HOST as string, {
      extraHeaders: {
        user: JSON.stringify(authInfo.user)
      }
    })
    setSocket(socket)

    socket.on('connect', () => setConnected(true))
    socket.on('disconnect', () => setConnected(false))
    socket.on('message', (message: DataMessage) => {
      dispatch?.({
        type: 'append',
        payload: [message]
      })
    })
    socket.on('onlines', (users: DataUser[]) => setOnlines(users))
    socket.on('online', (online: DataUser) => setOnlines((user) => (
      [...user, online]
    )))
    socket.on('offline', (offline: DataUser) => setOnlines((users) => {
      return users.filter((user) => user._id !== offline._id)
    }))

    return () => {
      socket.offAny()
      socket.close()
    }
  }, [authInfo, dispatch])

  return (
    <SocketContext.Provider value={{
      socket,
      connected,
      onlines,
    }}>
      {children}
    </SocketContext.Provider>
  )
}

export { SocketContext, SocketProvider }
