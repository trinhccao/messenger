import { Dispatch, FunctionComponent, SetStateAction } from 'react'
import Tab, { TabIds } from '../features/tab/Tab'
import Header from '../features/header/Header'
import Chat from '../features/chat/Chat'
import People from '../features/people/People'
interface HomeProps {
  activeTab: TabIds
  setActiveTab: Dispatch<SetStateAction<TabIds>>
}

const Home: FunctionComponent<HomeProps> = (props) => {
  const { activeTab, setActiveTab } = props

  const renderHomeContent = () => {
    return (
      activeTab === TabIds.Chat ? <Chat /> : <People />
    )
  }

  return (
    <div className="app-viewport">
      <Header activeTab={activeTab} />
      <Tab activeTab={activeTab} onClick={(tab) => setActiveTab(tab)} />
      <div className="app-content">
        <div className="app-content__inner">
          {renderHomeContent()}
        </div>
      </div>
    </div>
  )
}

export default Home
