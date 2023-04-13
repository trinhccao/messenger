import { FunctionComponent, MouseEvent } from 'react'
import AvatarLarge from './AvatarLarge'
import { useNavigate } from 'react-router-dom'
import { DataUser } from '../models/DataUser'

interface OnlineBarLinkProps {
  user: DataUser
}

const OnlineBarLink: FunctionComponent<OnlineBarLinkProps> = ({ user }) => {
  const navigate = useNavigate()
  const path = `/chat/${user._id}`

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <a className="online-bar__link" href={path} onClick={onClick}>
      <AvatarLarge image={user.avatar || ''} isOnline={true} />
      <span className="online__name">{user.firstName} {user.lastName}</span>
    </a>
  )
}

export default OnlineBarLink
