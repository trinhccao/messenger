import { FunctionComponent, useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks'
import { saveAuth } from '../../redux-slices/auth-slice'
import api from '../../api/api'

const Login: FunctionComponent = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const auth = await api.auth.login({ username, password })
    dispatch(saveAuth(auth))
    navigate('/')
  }

  return (
    <div className="app">
      <div className="login">
        <div className="container">
          <div className="login__content">
            <span className="logo"></span>
            <h2 className="login__title">Login to use the app</h2>
            <form className="login__form" action="#" onSubmit={onSubmit}>
              <input
                className="login__input login__input--first"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
              <input
                className="login__input login__input--last"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <div className="account-suggestion">
                Don't have account?{' '}
                <a className="account-suggestion__link" href="/register">
                  Create one
                </a>
              </div>
              <button className="login__submit" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
