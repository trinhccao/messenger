import { FunctionComponent, useState } from 'react'
import Header from './Header'
import Tab, { TabIds } from './Tab'
import Conversation from './Conversation'
import People from './People'

const Main: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(TabIds.Chat)

  return (
    <div className="app-viewport">
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
