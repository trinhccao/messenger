import { FunctionComponent, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
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
  const userId = auth?.user._id
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  if (auth) {
    authLogic.saveAuthToStorage(auth)
  } else {
    const savedAuth = authLogic.getSavedToken()
    savedAuth && dispatch(saveAuth(savedAuth))
  }

  useEffect(() => {
    !userId && navigate('/login')
    setLoading(false)
  }, [userId, navigate])

  useEffect(() => {
    if (!userId) {
      return
    }
    const controller = new AbortController()
    api.users
      .findAll(controller)
      .then((users) => dispatch(saveUsers(users)))
    api.threads
      .findAll(controller)
      .then((threads) => dispatch(saveThreads(threads)))
    return () => controller.abort()
  }, [userId, dispatch])

  if (loading) {
    return null
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:id" element={<Room />} />
      </Routes>
    </div>
  )
}

export default App
