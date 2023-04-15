import { FunctionComponent, MouseEvent } from 'react'
import AvatarSmall from './AvatarSmall'
import { useNavigate } from 'react-router-dom'
import { DataUser } from '../../models/DataUser'

interface SearchItemProps {
  user: DataUser
}

const SearchItem: FunctionComponent<SearchItemProps> = ({ user }) => {
  const navigate = useNavigate()
  const path = `/chat/${user._id}`
  const fullName = `${user.firstName} ${user.lastName}`

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <a className="conversations__item" href={path} onClick={onClick}>
      <AvatarSmall image={user.avatar} isOnline={true} />
      <div className="conversations__item-content">
        <span className="heading-lv3">{fullName}</span>
      </div>
    </a>
  )
}

export default SearchItem
