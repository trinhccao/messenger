import { FunctionComponent } from 'react'

interface HeaderProps {
  hidden?: boolean
}

const Header: FunctionComponent<HeaderProps> = ({ hidden }) => {
  return (
    <div className="header" hidden={hidden}>
      <div className="container">
        <h1 className="header__title">Messenger</h1>
      </div>
    </div>
  )
}

export default Header
