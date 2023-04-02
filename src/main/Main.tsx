import { FunctionComponent, useState } from 'react'
import Header from './Header'
import Tab from './Tab'
import Conversation from './Conversation'
import People from './People'
import { TabIds } from '../configs/tab-config'

interface MainProps {
  hidden?: boolean
}

const Main: FunctionComponent<MainProps> = ({ hidden }) => {
  const [activeTab, setActiveTab] = useState(TabIds.Chat)

  return (
    <div className="app-viewport" id="main" hidden={hidden}>
      <Header activeTab={activeTab} />
      <Tab activeTab={activeTab} onClick={(tab) => setActiveTab(tab)} />
      <div className="app-content">
        <div className="app-content__inner">
          <Conversation activeTab={activeTab} />
          <People activeTab={activeTab} />
        </div>
      </div>
    </div>
  )
}

export default Main
