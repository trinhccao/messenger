import { FunctionComponent, useEffect, useState } from 'react'
import { IUser } from '../../interfaces/IUser'
import axios from 'axios'

interface AvatarMessageProps {
  userId: string
}

const AvatarMessage: FunctionComponent<AvatarMessageProps> = ({ userId }) => {
  const [user, setUser] = useState<IUser>()

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get<IUser>(`/users/${userId}`, { signal: controller.signal })
      .then((res) => setUser(res.data))
    return () => controller.abort()
  }, [userId])

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
