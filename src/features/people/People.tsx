import { FunctionComponent, useEffect, useState } from 'react'
import PeopleItem from './PeopleItem'
import { DataUser } from '../../models/DataUser'
import axios from 'axios'

const People: FunctionComponent = () => {
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
    <div className="people">
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <PeopleItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default People
