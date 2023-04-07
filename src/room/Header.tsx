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
  const [user, setUser] = useState<IUser>()
  const navigate = useNavigate()
  const { authInfo } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const avatar = thread?.avatar || user?.avatar
  const threadName = thread?.name || `${user?.firstName} ${user?.lastName}`

  const onBack = () => {
    navigate('/')
  }

  useEffect(() => {
    if (!thread || thread.type !== ThreadTypes.Direct) {
      setLoading(false)
      return
    }
    const controller = new AbortController()
    const userId = thread.members.find((id) => id !== authInfo?.user._id)
    axios
      .get<IUser>(`/users/${userId}`, { signal: controller.signal })
      .then(({ data }) => {
        setLoading(false)
        setUser(data)
      })
    return () => controller.abort()
  }, [thread, authInfo?.user._id])

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <ButtonBack onBack={onBack} />
          <AvatarHeader image={avatar} />
          <h3 className="header__title header__title--room">
            {loading ? '' : threadName}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header
