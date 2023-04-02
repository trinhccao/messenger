import { FunctionComponent } from 'react'
import PeopleItem from './PeopleItem'
import { TabIds } from '../settings/tab-config'

interface PeopleProps {
  activeTab: TabIds
}

const People: FunctionComponent<PeopleProps> = ({ activeTab }) => {
  const forTab = TabIds.People

  return (
    <div className="people" hidden={activeTab !== forTab}>
      <ul>
        <li>
          <PeopleItem />
        </li>
      </ul>
    </div>
  )
}

export default People
