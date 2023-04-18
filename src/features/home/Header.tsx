import { FunctionComponent } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { logout } from '../../redux-slices/auth-slice'

const Header: FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const onClick = () => dispatch(logout())

  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">Chat</h1>
        <button className="button-logout" type="button" onClick={onClick}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header
