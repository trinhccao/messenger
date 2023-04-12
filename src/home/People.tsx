import { FunctionComponent, useState } from 'react'
import PeopleItem from './PeopleItem'
import { DataUser } from '../models/DataUser'

interface PeopleProps {
  hidden: boolean
}

const People: FunctionComponent<PeopleProps> = ({ hidden }) => {
  const [users, setUsers] = useState<DataUser[]>([])

  return (
    <div className="people" hidden={hidden}>
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
