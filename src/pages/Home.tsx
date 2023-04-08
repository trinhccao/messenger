import { FunctionComponent } from 'react'
import { IAuthInfo } from '../interfaces/IAuthInfo'
import Tab, { TabIds } from '../features/tab/Tab'
import Header from '../features/header/Header'
import Conversation from '../features/conversation/Conversation'
import People from '../features/people/People'

interface HomeProps {
  authInfo?: IAuthInfo
  activeTab: TabIds
  onTabClick: (tab: TabIds) => void
}

const Home: FunctionComponent<HomeProps> = (props) => {
  const { authInfo, activeTab, onTabClick } = props

  return (
    <div className="app-viewport">
      <Header activeTab={activeTab} />
      <Tab activeTab={activeTab} onClick={(tab) => onTabClick(tab)} />
      <div className="app-content">
        <div className="app-content__inner">
          {activeTab === TabIds.Chat ? <Conversation /> : <People />}
        </div>
      </div>
    </div>
  )
}

export default Home
