import { FunctionComponent } from 'react'
import PeopleItem from './PeopleItem'

interface PeopleProps {
  hidden?: boolean
}

const People: FunctionComponent<PeopleProps> = ({ hidden }) => {
  return (
    <div className="people" hidden={hidden}>
      <ul>
        <li>
          <PeopleItem />
        </li>
      </ul>
    </div>
  )
}

export default People
