import { FunctionComponent, MouseEvent } from 'react'
import AvatarLarge from './AvatarLarge'
import { useNavigate } from 'react-router-dom'
import { DataUser } from '../../types/DataUser'
import { useAppSelector } from '../../redux/hooks'
import { selectSocket } from '../../redux-slices/socket-slice'
import defaultAvatar from '../../assets/icons/null-profile.png'

interface OnlineBarLinkProps {
  user: DataUser
}

const OnlineBarLink: FunctionComponent<OnlineBarLinkProps> = ({ user }) => {
  const navigate = useNavigate()
  const path = `/chat/${user._id}`
  const socket = useAppSelector(selectSocket)
  const isOnline = socket.clientIds.some((id) => id === user._id)

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <a className="online-bar__link" href={path} onClick={onClick}>
      <AvatarLarge image={user.avatar || defaultAvatar} isOnline={isOnline} />
      <span className="online-bar__name">{user.firstName} {user.lastName}</span>
    </a>
  )
}

export default OnlineBarLink
