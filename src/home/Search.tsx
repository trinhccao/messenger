import { FunctionComponent, useState } from 'react'
import SearchItem from './SearchItem'
import axios from 'axios'
import { DataUser } from '../models/DataUser'

const Search: FunctionComponent = () => {
  const [users, setUsers] = useState<DataUser[]>([])

  const onChange = async (query: string) => {
    const res = await axios.get<DataUser[]>(`/users?name=${query}`)
    setUsers(res.data)
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
              <SearchItem user={user} key={user._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
