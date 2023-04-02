import { FunctionComponent } from 'react'
import Avatar from './Avatar'

const Room: FunctionComponent = () => {
  return (
    <div className="room">
      <div className="container">
        <div className="room__content">

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
    </div>
  )
}

export default Room
