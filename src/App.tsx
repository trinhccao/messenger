import { FunctionComponent, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './configs/axios'
import Login from './login/Login'
import Home from './home/Home'
import Room from './room/Room'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { saveAuth, selectAuth } from './slices/auth-slice'
import authLogic from './logic/auth-logic'
import api from './api/api'
import { saveUsers } from './slices/users-slice'

const App: FunctionComponent = () => {
  const [loading, setLoading] = useState(true)
  const auth = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(false)
    if (auth) {
      authLogic.saveAuthToStorage(auth)
      return
    }
    const savedAuth = authLogic.getSavedToken()
    if (savedAuth) {
      dispatch(saveAuth(savedAuth))
      return
    }
    navigate('/login')
  }, [auth, dispatch, navigate])

  useEffect(() => {
    if (!auth) {
      return
    }
    const controller = new AbortController()
    api.users.findAll(controller).then((users) => dispatch(saveUsers(users)))
  }, [auth, dispatch])

  if (loading) {
    return null
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:id" element={<Room />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
