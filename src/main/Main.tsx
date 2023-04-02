import { FunctionComponent, useState } from 'react'
import Header from './Header'
import Tab from './Tab'
import Conversation from './Conversation'
import People from './People'
import { TabIds } from '../settings/tab-config'
import { Scenes } from '../settings/app-config'

interface MainProps {
  activeScene: Scenes
  setActiveScene: React.Dispatch<React.SetStateAction<Scenes>>
}

const Main: FunctionComponent<MainProps> = (props) => {
  const { activeScene, setActiveScene } = props
  const [activeTab, setActiveTab] = useState(TabIds.Chat)
  const forScene = Scenes.Main

  return (
    <div className="app-viewport" hidden={activeScene !== forScene}>
      <Header activeTab={activeTab} />
      <Tab activeTab={activeTab} onClick={(tab) => setActiveTab(tab)} />
      <div className="app-content">
        <div className="app-content__inner">
          <Conversation activeTab={activeTab} setActiveScene={setActiveScene} />
          <People activeTab={activeTab} />
        </div>
      </div>
    </div>
  )
}

export default Main
