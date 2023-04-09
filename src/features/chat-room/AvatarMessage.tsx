import { FunctionComponent } from 'react'
import { DataUser } from '../../models/DataUser'

interface AvatarMessageProps {
  user: DataUser
}

const AvatarMessage: FunctionComponent<AvatarMessageProps> = ({ user }) => {
  return (
    <div className="avatar avatar--xs avatar--message">
      <img
        className="avatar__img"
        src={user?.avatar}
        width="28"
        height="28"
        alt=""
        loading="lazy"
      />
    </div>
  )
}

export default AvatarMessage
