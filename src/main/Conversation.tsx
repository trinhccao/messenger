import { FunctionComponent, useEffect, useState } from 'react'
import ConversationItem from './ConversationItem'
import Search from './Search'
import OnlineBar from './OnlineBar'
import { TabIds } from '../settings/tab-config'
import { IConversation } from '../interfaces/IConversation'
import axios from 'axios'
import { TokenResponse } from '../interfaces/TokenResponse'

interface ConversationProps {
  activeTab: TabIds
}

const Conversation: FunctionComponent<ConversationProps> = (props) => {
  const { activeTab } = props
  const token = window.localStorage.getItem('token') || ''
  const currentUser = (JSON.parse(token) as TokenResponse).user
  const [userIds, setUserIds] = useState<string[]>([])

  useEffect(() => {
    const abortController = new AbortController()
    axios
      .get<IConversation[]>('/conversations', {
        signal: abortController.signal
      })
      .then(({ data }) => {
        const ids = data.map((conversation) => (
          conversation.members.find((id) => id !== currentUser._id) || ''
        ))
        setUserIds(ids)
      })
    return () => {
      abortController.abort()
    }
  }, [currentUser._id])

  return (
    <div className="conversation" hidden={activeTab !== TabIds.Chat}>
      <Search />
      <OnlineBar />
      <ul className="conversation__list">
        {userIds.map((userId) => (
          <li>
            <ConversationItem userId={userId} key={userId} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Conversation
