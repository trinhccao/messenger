import { FunctionComponent, MouseEvent } from 'react'
import AvatarLarge from '../../common/AvatarLarge'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../interfaces/IUser'

interface OnlineBarLinkProps {
  user: IUser
}

const OnlineBarLink: FunctionComponent<OnlineBarLinkProps> = ({ user }) => {
  const navigate = useNavigate()
  const path = `/chat/${user._id}`

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <a className="online__link" href={path} onClick={onClick}>
      <AvatarLarge image={user.avatar || ''} isOnline={true} />
      <span className="online__name">{user.firstName} {user.lastName}</span>
    </a>
  )
}

export default OnlineBarLink
