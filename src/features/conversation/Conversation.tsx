import { FunctionComponent, useContext } from 'react'
import ConversationItem from './ConversationItem'
import Search from '../search/Search'
import OnlineBar from '../onlinebar/OnlineBar'
import { ThreadContext } from '../../contexts/ThreadContext'

const Conversation: FunctionComponent = () => {
  const { threads } = useContext(ThreadContext)

  return (
    <div className="conversation">
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
