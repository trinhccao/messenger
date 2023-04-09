import { FunctionComponent, MouseEvent, useContext } from 'react'
import AvatarSmall from '../../common/AvatarSmall'
import { useNavigate } from 'react-router-dom'
import { DataUser } from '../../models/DataUser'
import { SocketContext } from '../../contexts/SocketContext'

interface PeopleItemProps {
  user: DataUser
}

const PeopleItem: FunctionComponent<PeopleItemProps> = ({ user }) => {
  const navigate = useNavigate()
  const path = `/chat/${user._id}`
  const { onlines } = useContext(SocketContext)
  const isOnline = !!onlines.find(({ _id }) => _id === user?._id)

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <a className="conversation-link" href={path} onClick={onClick}>
      <AvatarSmall image={user.avatar} isOnline={isOnline} />
      <div className="conversation-link__content">
        <span className="heading-lv3">{user.firstName} {user.lastName}</span>
      </div>
    </a>
  )
}

export default PeopleItem
