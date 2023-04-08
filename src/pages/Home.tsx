import { FunctionComponent } from 'react'
import Tab, { TabIds } from '../features/tab/Tab'
import Header from '../features/header/Header'
import Chat from '../features/chat/Chat'
import People from '../features/people/People'
import { ConversationsProvider } from '../contexts/ConversationsContext'

interface HomeProps {
  activeTab: TabIds
  onTabClick: (tab: TabIds) => void
}

const Home: FunctionComponent<HomeProps> = (props) => {
  const { activeTab, onTabClick } = props

  const renderHomeContent = () => {
    return (
      activeTab === TabIds.Chat ?
        <ConversationsProvider>
          <Chat />
        </ConversationsProvider>
        : <People />
    )
  }

  return (
    <div className="app-viewport">
      <Header activeTab={activeTab} />
      <Tab activeTab={activeTab} onClick={(tab) => onTabClick(tab)} />
      <div className="app-content">
        <div className="app-content__inner">
          {renderHomeContent()}
        </div>
      </div>
    </div>
  )
}

export default Home
