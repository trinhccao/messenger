import { FunctionComponent, ReactNode, createContext, useContext, useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import { AuthContext } from './AuthContext'

interface SocketContextProps {
  socketio?: Socket
}

const SocketContext = createContext<SocketContextProps>({})
const SocketProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
  const { authInfo } = useContext(AuthContext)
  const [socketio, setSocketio] = useState<Socket>()

  useEffect(() => {
    if (!authInfo) {
      return
    }
    const socket = io(process.env.REACT_APP_API_HOST as string, {
      extraHeaders: {
        userId: authInfo.user._id
      }
    })
    setSocketio(socket)
    return () => { socket.close() }
  }, [authInfo])

  return (
    <SocketContext.Provider value={{ socketio }}>
      {props.children}
    </SocketContext.Provider>
  )
}

export { SocketContext, SocketProvider }
