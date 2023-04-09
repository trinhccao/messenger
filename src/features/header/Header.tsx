import { FunctionComponent, useContext } from 'react'
import { TabIds } from '../tab/Tab'
import { AuthContext } from '../../contexts/AuthContext'

interface HeaderProps {
  activeTab: TabIds
}

const Header: FunctionComponent<HeaderProps> = ({ activeTab }) => {
  const { setAuthInfo } = useContext(AuthContext)

  const onLogout = () => {
    localStorage.removeItem('authInfo')
    setAuthInfo?.(undefined)
  }

  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{activeTab}</h1>
        <button
          className="header__button-logout"
          type="button"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header
