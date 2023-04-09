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

interface SocketProviderProps {
  children: ReactNode
}

interface SocketContextProps {
  socket?: Socket
  connected: boolean
}

const SocketContext = createContext<SocketContextProps>({
  connected: false
})

const SocketProvider: FunctionComponent<SocketProviderProps> = ({
  children
}) => {
  const { authInfo } = useContext(AuthContext)
  const [socket, setSocket] = useState<Socket>()
  const [connected, setConnected] = useState(false)
  const { dispatch } = useContext(ConversationsContext)

  useEffect(() => {
    if (!authInfo) {
      return
    }
    const socket = io(process.env.REACT_APP_API_HOST as string, {
      extraHeaders: {
        userid: authInfo.user._id
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

    return () => {
      socket.offAny()
      socket.close()
    }
  }, [authInfo, dispatch])

  return (
    <SocketContext.Provider value={{
      socket,
      connected,
    }}>
      {children}
    </SocketContext.Provider>
  )
}

export { SocketContext, SocketProvider }
