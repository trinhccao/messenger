import { FunctionComponent } from 'react'
import AvatarHeader from './AvatarHeader'
import ButtonBack from './ButtonBack'
import { useNavigate } from 'react-router-dom'
import { DataUser } from '../../models/DataUser'
import { DataThread, ThreadTypes } from '../../models/DataThread'

interface HeaderProps {
  thread?: DataThread
  directUser?: DataUser
}

const Header: FunctionComponent<HeaderProps> = ({ thread, directUser }) => {
  const navigate = useNavigate()
  const userFullName = directUser
    ? `${directUser.firstName} ${directUser.lastName}`
    : ''
  const isDirect = thread?.type === ThreadTypes.Direct

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <ButtonBack onBack={() => navigate('/')} />
          <AvatarHeader image={isDirect ? directUser?.avatar : thread?.avatar} />
          <h3 className="header__title header__title--room">
            {isDirect ? userFullName : thread?.name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header
