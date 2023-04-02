import { FunctionComponent } from 'react'
import Avatar from './Avatar'

interface RoomProps {
  hidden?: boolean
}

const Room: FunctionComponent<RoomProps> = ({ hidden }) => {
  return (
    <div className="room" hidden={hidden}>
      <div className="container">
          {/* message in */}
          <div className="message-row">
            <Avatar image="/images/dummy-1.jpg" />
            <div className="message-group">
              <div className="message message--in">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>

          {/* message out */}
          <div className="message-row">
            <div className="message-group">
              <div className="message message--out">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Room
