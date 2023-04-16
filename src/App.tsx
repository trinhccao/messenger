import { FunctionComponent, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './configs/axios'
import Login from './features/login/Login'
import Home from './features/home/Home'
import Room from './features/room/Room'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { saveAuth, selectAuth } from './redux-slices/auth-slice'
import authLogic from './logic/auth-logic'
import api from './api/api'
import { saveUsers } from './redux-slices/users-slice'
import { saveThreads } from './redux-slices/threads-slice'

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
    api.users
      .findAll(controller)
      .then((users) => dispatch(saveUsers(users)))
    return () => controller.abort()
  }, [auth, dispatch])

  useEffect(() => {
    if (!auth) {
      return
    }
    const controller = new AbortController()
    api.threads
      .findAll(controller)
      .then((threads) => dispatch(saveThreads(threads)))
    return () => controller.abort()
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
