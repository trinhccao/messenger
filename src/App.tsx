import { FunctionComponent, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './configs/axios'
import Login from './login/Login'
import Home from './home/Home'
import Tab, { Tabs } from './tab/Tab'
import Room from './features/chat-room/Room'
import { ConversationsProvider } from './contexts/ConversationsContext'

const App: FunctionComponent = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.Chat)

  return (
    <div className="app">
      <div className="app__content">
        <Tab tab={tab} onClick={(tab) => setTab(tab)} />
        <ConversationsProvider>
          <Routes>
            <Route path="/" element={<Home tab={tab} />} />
            <Route path="/chat/:id" element={<Room />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ConversationsProvider>
      </div>
    </div>
  )
}

export default App
