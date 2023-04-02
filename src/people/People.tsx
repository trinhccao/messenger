import { FunctionComponent } from 'react'
import Item from './Item'

interface PeopleProps {
  hidden?: boolean
}

const People: FunctionComponent<PeopleProps> = ({ hidden }) => {
  return (
    <div className="people" hidden={hidden}>
      <ul>
        <li>
          <Item />
        </li>
      </ul>
    </div>
  )
}

export default People
