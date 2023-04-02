import { FunctionComponent, MouseEvent } from 'react'
import ConversationItem from './ConversationItem'
import Search from './Search'
import OnlineBar from './OnlineBar'
import { TabIds } from '../settings/tab-config'
import { Scenes } from '../settings/app-config'

interface ConversationProps {
  activeTab: TabIds
  setActiveScene: React.Dispatch<React.SetStateAction<Scenes>>
}

const Conversation: FunctionComponent<ConversationProps> = (props) => {
  const { activeTab, setActiveScene } = props
  const forTab = TabIds.Chat

  const onClick = (e: MouseEvent) => {
    e.preventDefault()
    setActiveScene(Scenes.Room)
  }

  return (
    <div className="conversation" hidden={activeTab !== forTab}>
      <Search />
      <OnlineBar />
      <ul className="conversation__list">
        <li>
          <ConversationItem onClick={onClick} />
        </li>
        <li>
          <ConversationItem onClick={onClick} />
        </li>
      </ul>
    </div>
  )
}

export default Conversation
