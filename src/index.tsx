import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ConversationsProvider } from './contexts/ConversationsContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ConversationsProvider>
          <App />
        </ConversationsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
