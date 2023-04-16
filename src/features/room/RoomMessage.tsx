import { FunctionComponent } from 'react'
import { ThreadMessage } from '../../types/DataThread'
import { useAppSelector } from '../../redux/hooks'
import { selectAuth } from '../../redux-slices/auth-slice'
import { selectUsers } from '../../redux-slices/users-slice'
import Message from './Message'
import AvatarMessage from './AvatarMessage'

interface RoomMessageProps {
  message: ThreadMessage
}

const RoomMessage: FunctionComponent<RoomMessageProps> = (props) => {
  const { message } = props
  const auth = useAppSelector(selectAuth)
  const users = useAppSelector(selectUsers)
  const own = message.userId === auth?.user._id
  const user = users.find(({ _id }) => _id === message.userId)

  return (
    <Message message={message} own={own} key={message._id}>
      {!own && <AvatarMessage src={user?.avatar || ''} />}
    </Message>
  )
}

export default RoomMessage
