import { FunctionComponent } from 'react'
import OnlineBarLink from './OnlineBarLink'

const OnlineBar: FunctionComponent = () => {
  return (
    <div className="online">
      <div className="container">
        <ul className="online__list">
          <li className="online__item">
            <OnlineBarLink userId="642b13db811f22572e02a4ab" />
          </li>
          <li className="online__item">
            <OnlineBarLink userId="642b156ef6e3a725d0f0d1dd" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OnlineBar
