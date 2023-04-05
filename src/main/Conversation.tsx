import { FunctionComponent } from 'react'
import ConversationItem from './ConversationItem'
import Search from './Search'
import OnlineBar from './OnlineBar'
import { TabIds } from '../settings/tab-config'

interface ConversationProps {
  activeTab: TabIds
}

const Conversation: FunctionComponent<ConversationProps> = (props) => {
  const { activeTab } = props

  return (
    <div className="conversation" hidden={activeTab !== TabIds.Chat}>
      <Search />
      <OnlineBar />
      <ul className="conversation__list">
        <li>
          <ConversationItem userId="642b13db811f22572e02a4ab" />
        </li>
        <li>
          <ConversationItem userId="642b156ef6e3a725d0f0d1dd" />
        </li>
      </ul>
    </div>
  )
}

export default Conversation
