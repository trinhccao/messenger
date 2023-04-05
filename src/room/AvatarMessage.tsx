import { FunctionComponent, useEffect, useState } from 'react'
import { IUser } from '../interfaces/IUser'
import axios from 'axios'

interface AvatarMessageProps {
  userId: string
}

const AvatarMessage: FunctionComponent<AvatarMessageProps> = ({ userId }) => {
  const [user, setUser] = useState<IUser>()

  useEffect(() => {
    const abortController = new AbortController()
    axios
      .get<IUser>(`/users/${userId}`, { signal: abortController.signal })
      .then((res) => setUser(res.data))
    return () => abortController.abort()
  })

  return (
    <div className="avatar avatar--xs avatar--message">
      <img className="avatar__img" src={user?.avatar} width="28" height="28" alt="" loading="lazy" />
    </div>
  )
}

export default AvatarMessage
