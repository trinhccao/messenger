import { FunctionComponent } from 'react'
import ConversationsItem from './ConversationsItem'
import { DataThread } from '../models/DataThread'

interface ConversationsProps {
  threads: DataThread[]
}

const Conversations: FunctionComponent<ConversationsProps> = ({ threads }) => {
  console.log('threads', threads)
  return (
    <ul className="conversations">
      
    </ul>
  )
}

export default Conversations
