import axios from 'axios'
import {
  FunctionComponent,
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext
} from 'react'
import { AuthContext } from './AuthContext'
import { DataUser } from '../models/DataUser'

export enum ThreadTypes {
  Direct = 'direct',
  Group = 'group',
}

export interface DataThread {
  _id: string
  name: string
  members: string[]
  createdAt: number
  updatedAt: number
  avatar?: string
  type: ThreadTypes
  isActive?: boolean
}

interface ThreadContextProps {
  threads: DataThread[]
  setThreads?: React.Dispatch<React.SetStateAction<DataThread[]>>
  threadUser?: DataUser
  isDirect?: boolean
  activeThread?: DataThread
}

interface ThreadProviderProps {
  children: ReactNode
}

const init = {
  threads: []
}

const ThreadContext = createContext<ThreadContextProps>(init)
const ThreadProvider: FunctionComponent<ThreadProviderProps> = (props) => {
  const [threads, setThreads] = useState<DataThread[]>([])
  const activeThread = threads.find((item) => item.isActive)
  const isDirect = activeThread?.type === ThreadTypes.Direct
  const { authInfo } = useContext(AuthContext)
  const [threadUser, setThreadUser] = useState<DataUser>()

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get<DataThread[]>('/threads', { signal: controller.signal })
      .then(({ data }) => setThreads(data))
    return () => controller.abort()
  }, [authInfo?.user._id])

  useEffect(() => {
    if (!isDirect) {
      return
    }
    const currentUserId = authInfo?.user._id
    const userId = activeThread.members.find((user) => user !== currentUserId)
    const controller = new AbortController()
    axios
      .get<DataUser>(`/users/${userId}`, { signal: controller.signal })
      .then(({ data }) => setThreadUser(data))
    return () => controller.abort(0)
  }, [activeThread?._id, activeThread?.members, authInfo?.user._id, isDirect])

  return (
    <ThreadContext.Provider value={{
      threads,
      setThreads,
      threadUser,
      isDirect,
      activeThread,
    }}>
      {props.children}
    </ThreadContext.Provider>
  )
}

export { ThreadContext, ThreadProvider }
