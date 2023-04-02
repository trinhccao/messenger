import { FunctionComponent } from 'react'
import AvatarSmall from './AvatarSmall'

const Item: FunctionComponent = () => {
  return (
    <a className="conversation-link" href="#none">
      <AvatarSmall image="/images/dummy-1.jpg" isOnline={true} />
      <div className="conversation-link__content">
        <span className="heading-lv3">Phuong Anh</span>
      </div>
    </a>
  )
}

export default Item
