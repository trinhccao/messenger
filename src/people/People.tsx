import { FunctionComponent } from 'react'
import Item from './Item'

const People: FunctionComponent = () => {
  return (
    <div className="people">
      <ul>
        <li>
          <Item />
        </li>
      </ul>
    </div>
  )
}

export default People
