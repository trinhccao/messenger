import { FunctionComponent, useEffect, useState } from 'react'
import { DataUser } from '../../models/DataUser'
import axios from 'axios'

interface AvatarMessageProps {
  userId: string
}

const AvatarMessage: FunctionComponent<AvatarMessageProps> = ({ userId }) => {
  const [user, setUser] = useState<DataUser>()

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get(`/users/${userId}`, { signal: controller.signal })
      .then(({ data }) => setUser(data))
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
