import {
  createContext,
  FunctionComponent,
  ReactNode,
  useReducer,
  Dispatch,
  useEffect,
  useContext,
} from 'react'
import messagesReducer, { Messages } from '../reducers/messages-reducer'
import { DataMessage } from '../models/DataMessage'
import { AuthContext } from './AuthContext'
import api from '../api/api'

interface MessagesProviderProps {
  children: ReactNode
}

interface MessagesContextProps {
  messages: Messages
  dispatchMessages?: Dispatch<{ payload: DataMessage[] }>
}

const initail = {
  messages: {}
}

const MessagesContext = createContext<MessagesContextProps>(initail)
const MessagesProvider: FunctionComponent<MessagesProviderProps> = (props) => {
  const { children } = props
  const { authInfo } = useContext(AuthContext)
  const [messages, dispatchMessages] = useReducer(messagesReducer, {})

  useEffect(() => {
    const controller = new AbortController()
    api.chat.messages(controller).then((messages) => {
      dispatchMessages({ payload: messages })
    })
    return () => controller.abort()
  }, [authInfo])

  return (
    <MessagesContext.Provider value={{
      messages,
      dispatchMessages,
    }}>
      {children}
    </MessagesContext.Provider>
  )
}

export { MessagesContext, MessagesProvider }
