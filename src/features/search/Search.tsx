import { FunctionComponent, useState } from 'react'
import PeopleItem from '../../common/PeopleItem'
import axios from 'axios'
import { DataUser } from '../../models/DataUser'

const Search: FunctionComponent = () => {
  const [users, setUsers] = useState<DataUser[]>([])

  const onChange = (query: string) => {
    const controller = new AbortController()
    axios
      .get<DataUser[]>(`/users?name=${query}`, { signal: controller.signal })
      .then(({ data }) => setUsers(data))
      .catch((err) => {
        setUsers([])
      })
    return () => controller.abort()
  }

  return (
    <div className="search">
      <div className="container">
        <div className="search__inner">
          <input
            className="search__input"
            type="text"
            placeholder="Search"
            onChange={(e) => onChange(e.target.value)}
          />
          <div className="search__result">
            {users.map((user) => (
              <PeopleItem user={user} key={user._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
