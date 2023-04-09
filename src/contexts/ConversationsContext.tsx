import {
  FunctionComponent,
  createContext,
  ReactNode,
  Dispatch,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'
import { DataMessage } from '../models/DataMessage'
import { sort } from '../logic/conversations'
import conversationReducer, { ConversationAction } from '../reducers/conversation-reducer'

export type Conversation = Record<string, DataMessage[]>

interface ConversationsContextProps {
  conversations: Conversation
  dispatch?: Dispatch<ConversationAction>
}

interface ConversationsProviderProps {
  children: ReactNode
}

const initial = {
  conversations: {}
}

const ConversationsContext = createContext<ConversationsContextProps>(initial)
const ConversationsProvider: FunctionComponent<ConversationsProviderProps> = ({
  children
}) => {
  const { authInfo } = useContext(AuthContext)
  const [conversations, dispatch] = useReducer(conversationReducer, {})

  const sorted = useMemo(() => sort(conversations), [conversations])

  useEffect(() => {
    if (!authInfo) {
      return
    }

    const controller = new AbortController()
    axios
      .get<DataMessage[]>('/messages', { signal: controller.signal })
      .then(({ data }) => dispatch({ type: 'init', payload: data }))

    return () => controller.abort()
  }, [authInfo])

  return (
    <ConversationsContext.Provider value={{
      conversations: sorted,
      dispatch,
    }}>
      {children}
    </ConversationsContext.Provider>
  )
}

export { ConversationsContext, ConversationsProvider }
