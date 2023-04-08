import { FunctionComponent } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './configs/axios'
import { AuthProvider } from './contexts/AuthContext'
import Main from './main/Main'
import Room from './room/Room'
import Login from './login/Login'
import { ThreadProvider } from './contexts/ThreadContext'
import { SocketProvider } from './contexts/SocketContext'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <SocketProvider>
            <ThreadProvider>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/chat/:id" element={<Room />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </ThreadProvider>
          </SocketProvider>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
