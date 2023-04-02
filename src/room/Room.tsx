import { FunctionComponent } from 'react'
import Avatar from './Avatar'
import Header from './Header'
import Tab from '../main/Tab'

interface RoomProps {
  hidden?: boolean
}

const Room: FunctionComponent<RoomProps> = ({ hidden }) => {
  return (
    <div className="app-viewport" id="room" hidden={hidden}>
      <Header />
      <Tab />
      <div className="app-content">
        <div className="room">
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
      </div>
    </div>
  )
}

export default Room
