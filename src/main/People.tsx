import { FunctionComponent, useEffect, useState } from 'react'
import PeopleItem from './PeopleItem'
import { TabIds } from '../settings/tab-config'
import { IUser } from '../interfaces/IUser'
import axios from 'axios'

interface PeopleProps {
  activeTab: TabIds
}

const People: FunctionComponent<PeopleProps> = (props) => {
  const { activeTab } = props
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
    <div className="people" hidden={activeTab !== TabIds.People}>
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
