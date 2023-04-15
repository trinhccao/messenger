import { FunctionComponent, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './configs/axios'
import Login from './login/Login'
import Home from './home/Home'
import Room from './room/Room'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { save, selectAuth } from './slices/auth-slice'
import authLogic from './logic/auth-logic'

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
      dispatch(save(savedAuth))
      return
    }
    navigate('/login')
  }, [auth, dispatch, navigate])

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
