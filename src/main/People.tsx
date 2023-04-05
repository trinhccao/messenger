import { FunctionComponent } from 'react'
import PeopleItem from './PeopleItem'
import { TabIds } from '../settings/tab-config'

interface PeopleProps {
  activeTab: TabIds
}

const People: FunctionComponent<PeopleProps> = (props) => {
  const { activeTab } = props

  return (
    <div className="people" hidden={activeTab !== TabIds.People}>
      <ul>
        <li>
          <PeopleItem userId="642b13db811f22572e02a4ab" />
          <PeopleItem userId="642b156ef6e3a725d0f0d1dd" />
        </li>
      </ul>
    </div>
  )
}

export default People
