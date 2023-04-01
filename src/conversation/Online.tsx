import { FunctionComponent } from 'react'
import AvatarLarge from '../common/AvatarLarge'

const Online: FunctionComponent = () => {
  return (
    <div className="online">
      <div className="online__item">
        <AvatarLarge image="/images/dummy-1.jpg" isOnline={true} />
      </div>
    </div>
  )
}

export default Online
