import { FunctionComponent, useEffect, useState } from 'react'
import OnlineBarLink from './OnlineBarLink'
import { IUser } from '../../interfaces/IUser'
import axios from 'axios'

const OnlineBar: FunctionComponent = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    const abortController = new AbortController()
    axios
      .get<IUser[]>('/users', {
        signal: abortController.signal
      }).then((res) => setUsers(res.data))
    return () => abortController.abort()
  }, [])

  return (
    <div className="online">
      <div className="container">
        <ul className="online__list">
          {users.map((user) => (
            <li className="online__item" key={user._id}>
              <OnlineBarLink user={user} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OnlineBar
