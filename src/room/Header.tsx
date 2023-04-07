import { FunctionComponent, useEffect, useState, useContext } from 'react'
import AvatarHeader from './AvatarHeader'
import ButtonBack from './ButtonBack'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../interfaces/IUser'
import axios from 'axios'
import { Thread, ThreadTypes } from '../contexts/ThreadContext'
import { AuthContext } from '../contexts/AuthContext'

interface HeaderProps {
  thread?: Thread
}

const Header: FunctionComponent<HeaderProps> = ({ thread }) => {
  const navigate = useNavigate()
  const { authInfo } = useContext(AuthContext)
  const [user, setUser] = useState<IUser>()
  const userFullName = user ? `${user.firstName} ${user.firstName}` : ''
  const isDirect = thread?.type === ThreadTypes.Direct

  const onBack = () => {
    navigate('/')
  }

  useEffect(() => {
    if (!isDirect || !thread) {
      return
    }
    const controller = new AbortController()
    const userId = thread.members.find((id) => id !== authInfo?.user._id)
    axios
      .get<IUser>(`/users/${userId}`, { signal: controller.signal })
      .then(({ data }) => {
        setUser(data)
      })
    return () => controller.abort()
  }, [thread, authInfo?.user._id, isDirect])

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
