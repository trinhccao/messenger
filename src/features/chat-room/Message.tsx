import { FunctionComponent } from 'react'
import AvatarMessage from './AvatarMessage'
import { DataMessage } from '../../models/DataMessage'
import useAuth from '../../hooks/useAuth'

interface MessageProps {
  message: DataMessage
}

const Message: FunctionComponent<MessageProps> = ({ message }) => {
  const [loading, authInfo] = useAuth()
  const own = authInfo?.user._id === message.userId
  const messageClassNames =
    authInfo?.user._id === message.userId
      ? 'message message--out'
      : 'message message--in'

  return (
    <>
      <div className="message-row">
        {!own && <AvatarMessage userId={message.userId} />}
        <div className="message-group">
          <div className={messageClassNames}>{message.content}</div>
        </div>
      </div>
    </>
  )
}

export default Message
