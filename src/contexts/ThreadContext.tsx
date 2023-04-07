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
import { IUser } from '../interfaces/IUser'

export enum ThreadTypes {
  Direct = 'direct',
  Group = 'group',
}

export interface Thread {
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
  threads: Thread[]
  setThreads?: React.Dispatch<React.SetStateAction<Thread[]>>
  threadUser?: IUser
  isDirect?: boolean
  activeThread?: Thread
}

interface ThreadProviderProps {
  children: ReactNode
}

const init = {
  threads: []
}

const ThreadContext = createContext<ThreadContextProps>(init)
const ThreadProvider: FunctionComponent<ThreadProviderProps> = (props) => {
  const [threads, setThreads] = useState<Thread[]>([])
  const activeThread = threads.find((item) => item.isActive)
  const isDirect = activeThread?.type === ThreadTypes.Direct
  const { authInfo } = useContext(AuthContext)
  const [threadUser, setThreadUser] = useState<IUser>()

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get<Thread[]>('/threads', { signal: controller.signal })
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
      .get<IUser>(`/users/${userId}`, { signal: controller.signal })
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
