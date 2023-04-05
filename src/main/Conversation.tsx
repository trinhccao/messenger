import { FunctionComponent, useContext, useEffect, useState } from 'react'
import ConversationItem from './ConversationItem'
import Search from './Search'
import OnlineBar from './OnlineBar'
import { IConversation } from '../interfaces/IConversation'
import axios from 'axios'
import { TabIds } from './Tab'
import { AuthContext } from '../contexts/AuthContext'

interface ConversationProps {
  activeTab: TabIds
}

const Conversation: FunctionComponent<ConversationProps> = (props) => {
  const { activeTab } = props
  const [userIds, setUserIds] = useState<string[]>([])
  const { authInfo } = useContext(AuthContext)

  useEffect(() => {
    const abortController = new AbortController()
    axios
      .get<IConversation[]>('/conversations', {
        signal: abortController.signal
      })
      .then((res) => {
        const ids = res.data.map((item) => {
          const userId = item.members.find((id) => id !== authInfo?.user._id)
          return userId || ''
        })
        setUserIds(ids)
      })
    return () => abortController.abort()
  }, [authInfo?.user._id])

  return (
    <div className="conversation" hidden={activeTab !== TabIds.Chat}>
      <Search />
      <OnlineBar />
      <ul className="conversation__list">
        {userIds.map((userId) => (
          <li key={userId}>
            <ConversationItem userId={userId} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Conversation
