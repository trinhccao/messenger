import { FunctionComponent } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { selectUsers } from '../../redux-slices/users-slice'
import OnlineBarLink from './OnlineBarLink'

const OnlineBar: FunctionComponent = () => {
  const users = useAppSelector(selectUsers)

  return (
    <div className="online-bar">
      <div className="container">
        <ul className="online-bar__list">
          {users.map((user) => (
            <li className="online-bar__item" key={user._id}>
              <OnlineBarLink user={user} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OnlineBar
