import { FunctionComponent } from 'react'
import ConversationItem from './ConversationItem'
import Search from './Search'
import OnlineBar from './OnlineBar'
import { TabIds } from '../configs/tab-config'

interface ConversationProps {
  activeTab: TabIds
}

const Conversation: FunctionComponent<ConversationProps> = ({ activeTab }) => {
  const forTab = TabIds.Chat

  return (
    <div className="conversation" hidden={activeTab !== forTab}>
      <Search />
      <OnlineBar />
      <ul className="conversation__list">
        <li>
          <ConversationItem />
        </li>
        <li>
          <ConversationItem />
        </li>
      </ul>
    </div>
  )
}

export default Conversation
