import { FunctionComponent } from 'react'
import AvatarLarge from '../common/AvatarLarge'

const Online: FunctionComponent = () => {
  return (
    <div className="online">
      <div className="container">
        <ul className="online__list">
          <li className="online__item">
            <a className="online__link" href="#none">
              <AvatarLarge image="/images/dummy-1.jpg" isOnline={true} />
              <span className="online__name">John Doeeeee</span>
            </a>
          </li>
          <li className="online__item">
            <a className="online__link" href="#none">
              <AvatarLarge image="/images/dummy-1.jpg" isOnline={true} />
              <span className="online__name">John Doe</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Online
