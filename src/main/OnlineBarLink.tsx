import { FunctionComponent, MouseEvent } from 'react'
import AvatarLarge from './AvatarLarge'
import { useNavigate } from 'react-router-dom'

interface OnlineBarLinkProps {
  userId: string
}

const OnlineBarLink: FunctionComponent<OnlineBarLinkProps> = ({ userId }) => {
  const navigate = useNavigate()
  const path = `/chat/${userId}`

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <a className="online__link" href={path} onClick={onClick}>
      <AvatarLarge image="/images/dummy-1.jpg" isOnline={true} />
      <span className="online__name">John Doeeeee</span>
    </a>
  )
}

export default OnlineBarLink
