import { FunctionComponent } from 'react'
import ConversationsItem from './ConversationsItem'
import { DataThread } from '../models/DataThread'

interface ConversationsProps {
  threads: DataThread[]
}

const Conversations: FunctionComponent<ConversationsProps> = ({ threads }) => {
  return (
    <ul className="conversations">
      {threads.map((thread) => (
        <ConversationsItem thread={thread} key={thread._id} />
      ))}
    </ul>
  )
}

export default Conversations
