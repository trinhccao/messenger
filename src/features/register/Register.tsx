import {
  FormEvent,
  FunctionComponent,
  useState,
  ChangeEvent,
} from 'react'
import ModalRegisterSuccess from '../modals/ModalRegisterSuccess'
import api from '../../api/api'
import { AxiosError } from 'axios'

const Register: FunctionComponent = () => {
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body = { username, firstName, lastName, password }
    try {
      await api.auth.register(body)
      setSuccess(true)
    } catch (err) {
      if ((err as AxiosError).response?.status === 409) {
        return setError(true)
      }
      alert('Unknown error occurred. Check console for more information')
      console.log(err)
    }
  }

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false)
    setUsername(e.target.value)
  }

  return (
    <div className="app">
      <div className="login">
        <div className="container">
          <div className="login__content">
            <span className="logo"></span>
            <h2 className="login__title">Register an account</h2>
            <form
              className="login__form"
              action="#"
              onSubmit={onSubmit}
              autoComplete="off"
            >
              <input
                className="login__input login__input--first"
                name="username"
                type="text"
                value={username}
                onChange={onUsernameChange}
                placeholder="Username"
                required
              />
              <div className="login__alert" hidden={!error}>
                Username already exist
              </div>
              <input
                className="login__input"
                name="username"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
              />
              <input
                className="login__input"
                name="username"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
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
              <button className="login__submit" type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
      {success && <ModalRegisterSuccess />}
    </div>
  )
}

export default Register
