import { FunctionComponent, useContext, useEffect, useState } from 'react'
import ConversationItem from './ConversationItem'
import Search from './Search'
import OnlineBar from './OnlineBar'
import axios from 'axios'
import { TabIds } from './Tab'
import { AuthContext } from '../contexts/AuthContext'

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
}

interface ConversationProps {
  activeTab: TabIds
}

const Conversation: FunctionComponent<ConversationProps> = (props) => {
  const { activeTab } = props
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
    <div className="conversation" hidden={activeTab !== TabIds.Chat}>
      <Search />
      <OnlineBar />
      <ul className="conversation__list">
        {threads.map((thread) => (
          <li key={thread._id}>
            <ConversationItem thread={thread} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Conversation
