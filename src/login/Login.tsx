import { FunctionComponent } from 'react'

const Login: FunctionComponent = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="login__content">
          <span className="logo"></span>
          <h2 className="login__title">Login to use the app</h2>
          <form className="login__form" action="#">
            <input className="login__input login__input--first" id="username" type="text" placeholder="Username" />
            <input className="login__input login__input--last" id="password" type="password" placeholder="Password" />
            <button className="login__submit login__submit--disabled" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
