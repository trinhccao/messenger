import { FunctionComponent } from 'react'
import ConversationItem from './ConversationItem'
import Search from './Search'
import OnlineBar from './OnlineBar'

interface ConversationProps {
  hidden?: boolean
}

const Conversation: FunctionComponent<ConversationProps> = ({ hidden }) => {
  return (
    <div className="conversation" hidden={hidden}>
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
