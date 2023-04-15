import { FunctionComponent } from 'react'
import AvatarHeader from './AvatarHeader'
import ButtonBack from './ButtonBack'
import { useNavigate } from 'react-router-dom'
import { DataThread } from '../../models/DataThread'

interface HeaderProps {
  thread: DataThread
}

const Header: FunctionComponent<HeaderProps> = ({ thread }) => {
  const navigate = useNavigate()

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <ButtonBack onBack={() => navigate('/')} />
          <AvatarHeader image={thread.avatar} />
          <h3 className="header__title header__title--room">
            {thread.name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header
