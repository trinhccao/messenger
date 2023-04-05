import { FunctionComponent, useEffect, useState } from 'react'
import AvatarHeader from './AvatarHeader'
import ButtonBack from './ButtonBack'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../interfaces/IUser'
import axios from 'axios'

interface HeaderProps {
  userId: string
}

const Header: FunctionComponent<HeaderProps> = ({ userId }) => {
  const [user, setUser] = useState<IUser>()
  const navigate = useNavigate()

  const onBack = () => {
    navigate('/')
  }

  useEffect(() => {
    const abortController = new AbortController()
    axios
      .get<IUser>(`/users/${userId}`, { signal: abortController.signal })
      .then((res) => setUser(res.data))
    return () => abortController.abort()
  }, [userId])

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <ButtonBack onBack={onBack} />
          <AvatarHeader image={user?.avatar} />
          <h3 className="header__title header__title--room">
            {user?.firstName} {user?.lastName}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header
