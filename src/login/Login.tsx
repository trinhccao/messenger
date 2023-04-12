import { FunctionComponent, useState, FormEvent, useContext } from 'react'
import axios from 'axios'
import { DataAuthResponse } from '../models/DataAuthResponse'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login: FunctionComponent = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setAuthInfo } = useContext(AuthContext)
  const navigate = useNavigate()

  const getSubmitClassNames = () => {
    const block = 'login__submit'
    const modifier = 'login__submit--disabled'
    const emptyReg = /^\s*$/
    const disabled = emptyReg.test(username) || emptyReg.test(password)
    return disabled ? `${block} ${modifier}` : block
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data } = await axios.post<DataAuthResponse>('/login', {
      username,
      password,
    })
    setAuthInfo?.(data)
    navigate('/')
  }

  return (
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
            <button
              className={getSubmitClassNames()}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login