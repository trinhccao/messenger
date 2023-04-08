import { FunctionComponent, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './configs/axios'
import Login from './pages/Login'
import { IAuthInfo } from './interfaces/IAuthInfo'
import Home from './pages/Home'
import { TabIds } from './features/tab/Tab'

const App: FunctionComponent = () => {
  const [authInfo, setAuthInfo] = useState<IAuthInfo>()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.Chat)

  const onLogin = (authInfo: IAuthInfo) => {
    localStorage.setItem('authInfo', JSON.stringify(authInfo))
    setAuthInfo(authInfo)
    navigate('/')
  }

  const onTabClick = (tab: TabIds) => {
    setActiveTab(tab)
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <Home
            authInfo={authInfo}
            activeTab={activeTab}
            onTabClick={onTabClick}
          />
        } />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
      </Routes>
    </div>
  )
}

export default App
