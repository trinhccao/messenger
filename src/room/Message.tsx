import { FunctionComponent } from 'react'
import AvatarMessage from './AvatarMessage'

const Message: FunctionComponent = () => {
  // const messageClassNames =
  // currentUser._id === message.userId
  // ? 'message message--out'
  // : 'message message--in'
  
  return (
    <>
      <div className="message-row">
        {/* <AvatarMessage userId={message.userId} /> */}
        <div className="message-group">
          {/* <div className={messageClassNames}>{message.content}</div> */}
        </div>
      </div>
    </>
  )
}

export default Message
