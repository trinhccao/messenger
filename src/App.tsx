import { FunctionComponent, useContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './configs/axios'
import Login from './pages/Login'
import Home from './pages/Home'
import { TabIds } from './features/tab/Tab'
import Room from './features/chat-room/Room'
import { AuthContext } from './contexts/AuthContext'

const App: FunctionComponent = () => {
  const { authInfo } = useContext(AuthContext)
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.Chat)

  useEffect(() => {
    !authInfo && navigate('/login')
  }, [authInfo, navigate])

  const homeProps = {
    activeTab,
    setActiveTab,
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home {...homeProps} />} />
        <Route path="/chat/:id" element={<Room />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
