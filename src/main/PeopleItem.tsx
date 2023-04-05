import { FunctionComponent, MouseEvent } from 'react'
import AvatarSmall from './AvatarSmall'
import { useNavigate } from 'react-router-dom'

interface PeopleItemProps {
  userId: string
}

const PeopleItem: FunctionComponent<PeopleItemProps> = ({ userId }) => {
  const navigate = useNavigate()
  const path = `/chat/${userId}`

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <a className="conversation-link" href={path} onClick={onClick}>
      <AvatarSmall image="/images/dummy-1.jpg" isOnline={true} />
      <div className="conversation-link__content">
        <span className="heading-lv3">Phuong Anh</span>
      </div>
    </a>
  )
}

export default PeopleItem
