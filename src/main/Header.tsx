import { FunctionComponent } from 'react'
import { TabIds } from '../configs/tab-config'

interface HeaderProps {
  activeTab: TabIds
}

const Header: FunctionComponent<HeaderProps> = ({ activeTab }) => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{activeTab}</h1>
      </div>
    </div>
  )
}

export default Header
