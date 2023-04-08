import {
  FunctionComponent,
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'
import { DataMessage } from '../models/DataMessage'

export type Conversation = Record<string, DataMessage[]>

interface ConversationsContextProps {
  conversations: Conversation
  setConversations?: Dispatch<SetStateAction<Conversation>>
}

interface ConversationsProviderProps {
  children: ReactNode
}

const initial = {
  conversations: {}
}

const ConversationsContext = createContext<ConversationsContextProps>(initial)
const ConversationsProvider: FunctionComponent<ConversationsProviderProps> = ({ children }) => {
  const { authInfo } = useContext(AuthContext)
  const [conversations, setConversations] = useState<Conversation>({})

  useEffect(() => {
    if (!authInfo) {
      return
    }

    const controller = new AbortController()
    axios
      .get<DataMessage[]>('/messages', { signal: controller.signal })
      .then(({ data }) => {
        const conversations = data.reduce((previous: Conversation, message) => {
          if (previous[message.threadId]) {
            previous[message.threadId].push(message)
          } else {
            previous[message.threadId] = [message]
          }
          return previous
        }, {})
        setConversations(conversations as Conversation)
      })

    return () => controller.abort()
  }, [authInfo])

  return (
    <ConversationsContext.Provider value={{
      conversations,
      setConversations,
    }}>
      {children}
    </ConversationsContext.Provider>
  )
}

export { ConversationsContext, ConversationsProvider }
