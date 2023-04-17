import { FunctionComponent, MouseEvent } from 'react'
import AvatarSmall from './AvatarSmall'
import { useNavigate } from 'react-router-dom'
import { DataUser } from '../../types/DataUser'
import { useAppSelector } from '../../redux/hooks'
import { selectSocket } from '../../redux-slices/socket-slice'

interface SearchItemProps {
  user: DataUser
}

const SearchItem: FunctionComponent<SearchItemProps> = ({ user }) => {
  const navigate = useNavigate()
  const path = `/chat/${user._id}`
  const fullName = `${user.firstName} ${user.lastName}`
  const socket = useAppSelector(selectSocket)
  const isOnline = socket.clientIds.some((id) => id === user._id)

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <a className="conversations__item" href={path} onClick={onClick}>
      <AvatarSmall image={user.avatar} isOnline={isOnline} />
      <div className="conversations__item-content">
        <span className="heading-lv3">{fullName}</span>
      </div>
    </a>
  )
}

export default SearchItem
