import {
  createContext,
  FunctionComponent,
  ReactNode,
  useReducer,
  Dispatch,
  useEffect,
} from 'react'
import messagesReducer, { Messages } from '../reducers/messages-reducer'
import { DataMessage } from '../models/DataMessage'
import api from '../api/api'
import { useAppSelector } from '../app/hooks'
import { selectAuth } from '../slices/auth-slice'

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
  const auth = useAppSelector(selectAuth)
  const [messages, dispatchMessages] = useReducer(messagesReducer, {})

  useEffect(() => {
    const controller = new AbortController()
    api.chat.messages(controller).then((messages) => {
      dispatchMessages({ payload: messages })
    })
    return () => controller.abort()
  }, [auth])

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
