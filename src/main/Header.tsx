import { FunctionComponent } from 'react'
import { TabIds } from '../configs/tab-config'

interface HeaderProps {
  hidden?: boolean
  activeTab: TabIds
}

const Header: FunctionComponent<HeaderProps> = ({ hidden, activeTab }) => {
  return (
    <div className="header" hidden={hidden}>
      <div className="container">
        <h1 className="header__title">{activeTab}</h1>
      </div>
    </div>
  )
}

export default Header
