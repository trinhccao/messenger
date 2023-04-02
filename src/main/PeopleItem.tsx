import { FunctionComponent, MouseEvent } from 'react'
import AvatarSmall from './AvatarSmall'

interface PeopleItemProps {
  onClick: (e: MouseEvent) => void
}

const PeopleItem: FunctionComponent<PeopleItemProps> = ({ onClick }) => {
  return (
    <a className="conversation-link" href="#none" onClick={onClick}>
      <AvatarSmall image="/images/dummy-1.jpg" isOnline={true} />
      <div className="conversation-link__content">
        <span className="heading-lv3">Phuong Anh</span>
      </div>
    </a>
  )
}

export default PeopleItem
