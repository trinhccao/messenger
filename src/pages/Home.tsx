import { FunctionComponent } from 'react'
import { DataAuthResponse } from '../models/DataAuthResponse'
import Tab, { TabIds } from '../features/tab/Tab'
import Header from '../features/header/Header'
import Chat from '../features/chat/Chat'
import People from '../features/people/People'
import { Conversation } from '../hooks/useConversations'

interface HomeProps {
  authInfo?: DataAuthResponse
  activeTab: TabIds
  onTabClick: (tab: TabIds) => void
  conversations: Conversation
}

const Home: FunctionComponent<HomeProps> = (props) => {
  const { authInfo, activeTab, onTabClick, conversations } = props

  return (
    <div className="app-viewport">
      <Header activeTab={activeTab} />
      <Tab activeTab={activeTab} onClick={(tab) => onTabClick(tab)} />
      <div className="app-content">
        <div className="app-content__inner">
          {activeTab === TabIds.Chat ? <Chat conversations={conversations} /> : <People />}
        </div>
      </div>
    </div>
  )
}

export default Home
