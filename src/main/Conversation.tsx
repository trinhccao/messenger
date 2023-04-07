import { FunctionComponent, useContext } from 'react'
import ConversationItem from './ConversationItem'
import Search from './Search'
import OnlineBar from './OnlineBar'
import { TabIds } from './Tab'
import { ThreadContext } from '../contexts/ThreadContext'

interface ConversationProps {
  activeTab: TabIds
}

const Conversation: FunctionComponent<ConversationProps> = (props) => {
  const { activeTab } = props
  const { threads } = useContext(ThreadContext)

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
