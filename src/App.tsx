import { FunctionComponent, useContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './configs/axios'
import Login from './pages/Login'
import Home from './home/Home'
import Tab, { TabIds } from './features/tab/Tab'
import Room from './features/chat-room/Room'
import { AuthContext } from './contexts/AuthContext'
import { ConversationsProvider } from './contexts/ConversationsContext'

const App: FunctionComponent = () => {
  const { authInfo } = useContext(AuthContext)
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.Chat)

  useEffect(() => {
    !authInfo && navigate('/login')
  }, [authInfo, navigate])

  return (
    <div className="app">
      <div className="app__content">
        <Tab activeTab={activeTab} onClick={(tab) => setActiveTab(tab)} />
        <ConversationsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:id" element={<Room />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ConversationsProvider>
      </div>
    </div>
  )
}

export default App
