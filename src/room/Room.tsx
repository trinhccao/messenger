import { FunctionComponent } from 'react'
import AvatarMessage from './AvatarMessage'
import Header from './Header'
import Compose from './Compose'
import { Scenes } from '../settings/app-config'

interface RoomProps {
  activeScene: Scenes
  setActiveScene: React.Dispatch<React.SetStateAction<Scenes>>
}

const Room: FunctionComponent<RoomProps> = (props) => {
  const { activeScene, setActiveScene } = props
  const forScene = Scenes.Room

  return (
    <div className="app-viewport" hidden={activeScene !== forScene}>
      <Header setActiveScene={setActiveScene} />
      <Compose />
      <div className="app-content">
        <div className="room">
          <div className="container">
            {/* message in */}
            <div className="message-row">
              <AvatarMessage image="/images/dummy-1.jpg" />
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
