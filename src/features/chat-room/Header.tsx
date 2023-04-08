import { FunctionComponent, useEffect, useState, useContext } from 'react'
import AvatarHeader from './AvatarHeader'
import ButtonBack from './ButtonBack'
import { useNavigate } from 'react-router-dom'
import { DataUser } from '../../models/DataUser'
import axios from 'axios'
import { DataThread, ThreadTypes } from '../../contexts/ThreadContext'
import { AuthContext } from '../../contexts/AuthContext'

interface HeaderProps {
  thread?: DataThread
}

const Header: FunctionComponent<HeaderProps> = ({ thread }) => {
  const navigate = useNavigate()
  const { authInfo } = useContext(AuthContext)
  const [user, setUser] = useState<DataUser>()
  const userFullName = user ? `${user.firstName} ${user.lastName}` : ''
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
      .get<DataUser>(`/users/${userId}`, { signal: controller.signal })
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
