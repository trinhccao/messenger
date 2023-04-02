import { FunctionComponent, MouseEvent } from 'react'
import PeopleItem from './PeopleItem'
import { TabIds } from '../settings/tab-config'
import { Scenes } from '../settings/app-config'

interface PeopleProps {
  activeTab: TabIds
  setActiveScene: React.Dispatch<React.SetStateAction<Scenes>>
}

const People: FunctionComponent<PeopleProps> = (props) => {
  const { activeTab, setActiveScene } = props
  const forTab = TabIds.People

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    setActiveScene(Scenes.Room)
  }

  return (
    <div className="people" hidden={activeTab !== forTab}>
      <ul>
        <li>
          <PeopleItem onClick={onClick} />
        </li>
      </ul>
    </div>
  )
}

export default People
