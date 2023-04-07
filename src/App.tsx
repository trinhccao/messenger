import { FunctionComponent } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './configs/axios'
import { AuthProvider } from './contexts/AuthContext'
import Main from './main/Main'
import Room from './room/Room'
import Login from './login/Login'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat/:id" element={<Room />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
