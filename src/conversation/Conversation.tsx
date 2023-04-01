import { FunctionComponent } from 'react'
import Item from './Item'
import Search from './Search'
import Online from './Online'

interface ConversationProps {
  hidden?: boolean
}

const Conversation: FunctionComponent<ConversationProps> = ({ hidden }) => {
  return (
    <div className="conversation" hidden={hidden}>
      <Search />
      <Online />
      <ul className="conversation__list">
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
      </ul>
    </div>
  )
}

export default Conversation
