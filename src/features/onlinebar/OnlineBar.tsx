import { FunctionComponent, useContext, useEffect, useState } from 'react'
import OnlineBarLink from './OnlineBarLink'
import { DataUser } from '../../models/DataUser'
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext'

const OnlineBar: FunctionComponent = () => {
  const [users, setUsers] = useState<DataUser[]>([])
  const { authInfo } = useContext(AuthContext)

  useEffect(() => {
    if (!authInfo) {
      return
    }
    const abortController = new AbortController()
    axios
      .get<DataUser[]>('/users', {
        signal: abortController.signal
      }).then((res) => setUsers(res.data))
    return () => abortController.abort()
  }, [authInfo])

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
