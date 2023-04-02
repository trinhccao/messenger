import { FunctionComponent, MouseEvent } from 'react'
import AvatarLarge from './AvatarLarge'

interface OnlineBarLinkProps {
  onClick: (e: MouseEvent) => void
}

const OnlineBarLink: FunctionComponent<OnlineBarLinkProps> = ({ onClick }) => {
  return (
    <a className="online__link" href="#none" onClick={onClick}>
      <AvatarLarge image="/images/dummy-1.jpg" isOnline={true} />
      <span className="online__name">John Doeeeee</span>
    </a>
  )
}

export default OnlineBarLink
