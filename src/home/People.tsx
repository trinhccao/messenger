import { FunctionComponent, useState } from 'react'
import PeopleItem from './PeopleItem'
import { DataUser } from '../models/DataUser'

const People: FunctionComponent = () => {
  const [users, setUsers] = useState<DataUser[]>([])

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
