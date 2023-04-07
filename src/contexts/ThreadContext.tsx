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
  const { authInfo } = useContext(AuthContext)

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get<Thread[]>('/threads', { signal: controller.signal })
      .then(({ data }) => setThreads(data))
    return () => controller.abort()
  }, [authInfo?.user._id])

  return (
    <ThreadContext.Provider value={{ threads, setThreads }}>
      {props.children}
    </ThreadContext.Provider>
  )
}

export { ThreadContext, ThreadProvider }
