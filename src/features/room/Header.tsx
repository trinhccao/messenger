import { FunctionComponent } from 'react'
import AvatarHeader from './AvatarHeader'
import ButtonBack from './ButtonBack'
import { useNavigate } from 'react-router-dom'
import { DataThread, ThreadTypes } from '../../types/DataThread'
import defaultGroupAvatar from '../../assets/icons/icon-group-chat.png'
import defaultUserAvatar from '../../assets/icons/null-profile.png'

interface HeaderProps {
  thread: DataThread
}

const Header: FunctionComponent<HeaderProps> = ({ thread }) => {
  const navigate = useNavigate()
  const avatar = thread.avatar
    ? thread.avatar
    : thread.type === ThreadTypes.Direct
      ? defaultUserAvatar
      : defaultGroupAvatar

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <ButtonBack onBack={() => navigate('/')} />
          <AvatarHeader image={avatar} />
          <h3 className="header__title header__title--room">
            {thread.name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header
