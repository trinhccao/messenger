import { FunctionComponent } from 'react'
import ConversationsItem from './ConversationsItem'
import { useAppSelector } from '../../redux/hooks'
import { selectThreads } from '../../redux-slices/threads-slice'

const Conversations: FunctionComponent = () => {
  const threads = useAppSelector(selectThreads)
  const visibleThreads = threads.filter((item) => item.messages.length)

  return (
    <ul className="conversations">
      {visibleThreads.map((thread) => (
        <ConversationsItem thread={thread} key={thread._id} />
      ))}
    </ul>
  )
}

export default Conversations
