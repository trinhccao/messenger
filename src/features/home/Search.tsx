import { FunctionComponent, useState } from 'react'
import SearchItem from './SearchItem'
import { DataUser } from '../../types/DataUser'
import { useAppSelector } from '../../redux/hooks'
import { selectUsers } from '../../redux-slices/users-slice'

const Search: FunctionComponent = () => {
  const users = useAppSelector(selectUsers)
  const [filteredUsers, setFilteredUsers] = useState<DataUser[]>([])

  const onChange = async (search: string) => {
    if (!search) {
      return setFilteredUsers([])
    }
    const regex = new RegExp(search, 'i')
    const filtered = users.filter((user) => {
      return `${user.firstName} ${user.lastName}`.match(regex)
    })
    setFilteredUsers(filtered)
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
            {filteredUsers.map((user) => (
              <SearchItem user={user} key={user._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
