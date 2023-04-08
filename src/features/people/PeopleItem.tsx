import { FunctionComponent, MouseEvent } from 'react'
import AvatarSmall from '../../common/AvatarSmall'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../interfaces/IUser'

interface PeopleItemProps {
  user: IUser
}

const PeopleItem: FunctionComponent<PeopleItemProps> = ({ user }) => {
  const navigate = useNavigate()
  const path = `/chat/${user._id}`

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <a className="conversation-link" href={path} onClick={onClick}>
      <AvatarSmall image={user.avatar || ''} isOnline={true} />
      <div className="conversation-link__content">
        <span className="heading-lv3">{user.firstName} {user.lastName}</span>
      </div>
    </a>
  )
}

export default PeopleItem
