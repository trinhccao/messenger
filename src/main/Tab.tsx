import { FunctionComponent } from 'react'
import {
  textClasses,
  textActiveClasses,
  tabs,
  TabIds,
} from '../configs/tab-config'

interface TabProps {
  onClick: (tab: TabIds) => void
  activeTab: TabIds
}

const Tab: FunctionComponent<TabProps> = ({ onClick, activeTab }) => {
  return (
    <div className="tab">
      <ul className="tab__list">
        {tabs.map(({ id, icon, iconActive }) => (
          <li className="tab__item">
            <button className="tab-button" type="button" onClick={() => onClick(id)}>
              <img src={icon} height="20" alt="" hidden={id === activeTab} />
              <img src={iconActive} height="20" alt="" hidden={id !== activeTab} />
              <span className={id === activeTab ? textActiveClasses : textClasses}>{id}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tab
