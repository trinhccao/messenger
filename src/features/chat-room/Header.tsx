import { FunctionComponent, useState } from 'react'
import AvatarHeader from './AvatarHeader'
import ButtonBack from './ButtonBack'
import { useNavigate } from 'react-router-dom'
import { DataUser } from '../../models/DataUser'
import { DataThread, ThreadTypes } from '../../models/DataThread'
import useAuth from '../../hooks/useAuth'

interface HeaderProps {
  thread?: DataThread
}

const Header: FunctionComponent<HeaderProps> = ({ thread }) => {
  const navigate = useNavigate()
  const [authInfo] = useAuth()
  const [user, setUser] = useState<DataUser>()
  const userFullName = user ? `${user.firstName} ${user.lastName}` : ''
  const isDirect = thread?.type === ThreadTypes.Direct

  const onBack = () => {
    navigate('/')
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <ButtonBack onBack={onBack} />
          <AvatarHeader image={isDirect ? user?.avatar : thread?.avatar} />
          <h3 className="header__title header__title--room">
            {isDirect ? userFullName : thread?.name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header
