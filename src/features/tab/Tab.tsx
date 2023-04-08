import { FunctionComponent } from 'react'
import iconChat from '../../assets/icons/icon-chat.png'
import iconChatActive from '../../assets/icons/icon-chat-active.png'
import iconPeople from '../../assets/icons/icon-people.png'
import iconPeopleActive from '../../assets/icons/icon-people-active.png'

interface TabProps {
  onClick: (tab: TabIds) => void
  activeTab: TabIds
}

export enum TabIds {
  Chat = 'Chat',
  People = 'People'
}

const tabs = [
  {
    id: TabIds.Chat,
    icon: iconChat,
    iconActive: iconChatActive,
  },
  {
    id: TabIds.People,
    icon: iconPeople,
    iconActive: iconPeopleActive,
  }
]

const Tab: FunctionComponent<TabProps> = ({ onClick, activeTab }) => {
  const renderButtonText = (id: TabIds) => {
    const block = 'button-text'
    const modifier = 'button-text button-text--active'
    return (
      <span className={id === activeTab ? modifier : block}>{id}</span>
    )
  }

  return (
    <div className="tab">
      <ul className="tab__list">
        {tabs.map(({ id, icon, iconActive }) => (
          <li className="tab__item" key={id}>
            <button className="tab-button" type="button" onClick={() => onClick(id)}>
              <img src={icon} height="20" alt="" hidden={id === activeTab} />
              <img src={iconActive} height="20" alt="" hidden={id !== activeTab} />
              {renderButtonText(id)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tab
