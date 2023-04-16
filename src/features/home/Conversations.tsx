import { FunctionComponent } from 'react'
import ConversationsItem from './ConversationsItem'
import { useAppSelector } from '../../redux/hooks'
import { selectThreads } from '../../redux-slices/threads-slice'

const Conversations: FunctionComponent = () => {
  const threads = useAppSelector(selectThreads)
  // const filtered = threads.filter((item) => item.messages.length)

  return (
    <ul className="conversations">
      {threads.map((thread) => (
        <ConversationsItem thread={thread} key={thread._id} />
      ))}
    </ul>
  )
}

export default Conversations
