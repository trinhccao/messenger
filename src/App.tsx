import { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router-dom'
import './configs/axios'
import Login from './login/Login'
import Home from './home/Home'
import Room from './features/chat-room/Room'
import { MessagesProvider } from './contexts/MessagesContext'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <MessagesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Room />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MessagesProvider>
    </div>
  )
}

export default App
