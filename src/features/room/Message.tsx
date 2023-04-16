import { FunctionComponent, ReactNode } from 'react'
import { ThreadMessage } from '../../models/DataThread'

interface MessageProps {
  message: ThreadMessage
  children: ReactNode
  own: boolean
}

const Message: FunctionComponent<MessageProps> = (props) => {
  const { message, children, own } = props
  const classNames = own ? 'message message--out' : 'message message--in'

  return (
    <>
      <div className="message-row">
        {children}
        <div className="message-group">
          <div className={classNames}>{message.content}</div>
        </div>
      </div>
    </>
  )
}

export default Message
