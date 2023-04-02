import { FunctionComponent, MouseEvent } from 'react'
import OnlineBarLink from './OnlineBarLink'
import { Scenes } from '../settings/app-config'

interface OnlineBarProps {
  setActiveScene: React.Dispatch<React.SetStateAction<Scenes>>
}

const OnlineBar: FunctionComponent<OnlineBarProps> = ({ setActiveScene }) => {
  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    setActiveScene(Scenes.Room)
  }

  return (
    <div className="online">
      <div className="container">
        <ul className="online__list">
          <li className="online__item">
            <OnlineBarLink onClick={onClick} />
          </li>
          <li className="online__item">
            <OnlineBarLink onClick={onClick} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OnlineBar
