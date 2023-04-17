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
  const dispatch = useAppDispatch()
  const token = auth?.token
  const userId = auth?.user._id

  useEffect(() => {
    if (!token || !userId) {
      return
    }

    const host = process.env.REACT_APP_WS_HOST as string
    const socket = io(host, { auth: { token, userId } })
    socket.on('connect', () => dispatch(setConnected(true)))
    socket.on('disconnect', () => dispatch(setConnected(false)))
    setSocket(socket)

    return () => {
      socket.offAny()
      dispatch(setConnected(false))
      dispatch(setClientIds([]))
      socket.close()
      setSocket(null)
    }
  }, [token, userId, dispatch])

  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  )
}

export { SocketContext, SocketProvider }
