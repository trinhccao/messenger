import { FunctionComponent, useContext } from 'react'
import OnlineBarLink from './OnlineBarLink'
import { SocketContext } from '../../contexts/SocketContext'

const OnlineBar: FunctionComponent = () => {
  const { onlines } = useContext(SocketContext)

  return (
    <div className="online">
      <div className="container">
        <ul className="online__list">
          {onlines.map((user) => (
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
