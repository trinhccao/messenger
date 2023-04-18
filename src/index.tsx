import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Register from './features/register/Register'
import Login from './features/login/Login'
import './configs/axios'
import { SocketProvider } from './contexts/SocketContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={
            <SocketProvider>
              <App />
            </SocketProvider>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
