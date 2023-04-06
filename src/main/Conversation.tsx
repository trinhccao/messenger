import { FunctionComponent, useContext, useEffect, useLayoutEffect, useState } from 'react'
import ConversationItem from './ConversationItem'
import Search from './Search'
import OnlineBar from './OnlineBar'
import axios from 'axios'
import { TabIds } from './Tab'
import { AuthContext } from '../contexts/AuthContext'

export interface Thread {
  _id: string
  name?: string
  members: string[]
  createdAt: number
  updatedAt: number
  avatar?: string
  type: string
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
    const { signal } = controller;
    (async () => {
      const directsRes = await axios.get<Thread[]>('/directs', { signal })
      const threadsRes = await axios.get<Thread[]>('/threads', { signal })

      const d = directsRes.data.map((item) => ({ ...item, type: 'direct' }))
      const t = threadsRes.data.map((item) => ({ ...item, type: 'thread' }))

      setThreads([...d, ...t])
    })()
    return () => controller.abort()
  }, [authInfo?.user._id])

  useLayoutEffect(() => {
    const sort = threads.sort((a, b) => b.updatedAt - a.updatedAt)
    setThreads(sort)
  }, [threads])

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
