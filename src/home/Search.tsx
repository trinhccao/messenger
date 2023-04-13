import { FunctionComponent, useState } from 'react'
import SearchItem from './SearchItem'
import { DataUser } from '../models/DataUser'

interface SearchProps {
  users: DataUser[]
}

const Search: FunctionComponent<SearchProps> = ({ users }) => {
  const [result, setResult] = useState<DataUser[]>([])

  const onChange = async (search: string) => {
    const filtered = users.filter((user) => {
      if (!search) {
        return false
      }
      const { firstName, lastName } = user
      return firstName.match(search) || lastName.match(search)
    })
    setResult(filtered)
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
            {result.map((user) => (
              <SearchItem user={user} key={user._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
