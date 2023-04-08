import { FunctionComponent, useEffect, useState } from 'react'
import OnlineBarLink from './OnlineBarLink'
import { DataUser } from '../../models/DataUser'
import axios from 'axios'

const OnlineBar: FunctionComponent = () => {
  const [users, setUsers] = useState<DataUser[]>([])

  useEffect(() => {
    const abortController = new AbortController()
    axios
      .get<DataUser[]>('/users', {
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
