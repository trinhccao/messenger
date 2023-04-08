import { FunctionComponent, useContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './configs/axios'
import Login from './pages/Login'
import { DataAuthResponse } from './models/DataAuthResponse'
import Home from './pages/Home'
import { TabIds } from './features/tab/Tab'
import Room from './features/chat-room/Room'
import { AuthContext } from './contexts/AuthContext'
import { ConversationsContext } from './contexts/ConversationsContext'

const App: FunctionComponent = () => {
  const { authInfo, setAuthInfo } = useContext(AuthContext)
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.Chat)
  const { conversations, setConversations } = useContext(ConversationsContext)

  const onLogin = (authInfo: DataAuthResponse) => {
    localStorage.setItem('authInfo', JSON.stringify(authInfo))
    setAuthInfo?.(authInfo)
    navigate('/')
  }

  const onTabClick = (tab: TabIds) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    !authInfo && navigate('/login')
  }, [authInfo, navigate])

  const homeProps = {
    authInfo,
    activeTab,
    onTabClick,
    conversations,
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home {...homeProps} />} />
        <Route path="/chat/:id" element={<Room />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
      </Routes>
    </div>
  )
}

export default App
