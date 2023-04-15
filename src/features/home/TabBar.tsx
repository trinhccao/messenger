import { FunctionComponent } from 'react'
import iconChat from '../../assets/icons/icon-chat.png'
import iconChatActive from '../../assets/icons/icon-chat-active.png'
import iconPeople from '../../assets/icons/icon-people.png'
import iconPeopleActive from '../../assets/icons/icon-people-active.png'

interface TabBarProps {
  onClick: (tab: Tabs) => void
  tab: Tabs
}

export enum Tabs {
  Chat = 'Chat',
  People = 'People'
}

const tabs = [
  {
    id: Tabs.Chat,
    icon: iconChat,
    iconActive: iconChatActive,
  },
  {
    id: Tabs.People,
    icon: iconPeople,
    iconActive: iconPeopleActive,
  }
]

const TabBar: FunctionComponent<TabBarProps> = ({ onClick, tab }) => {
  const renderButtonText = (id: Tabs) => {
    const block = 'button-text'
    const modifier = 'button-text button-text--active'
    return (
      <span className={id === tab ? modifier : block}>{id}</span>
    )
  }

  return (
    <div className="tab">
      <ul className="tab__list">
        {tabs.map(({ id, icon, iconActive }) => (
          <li className="tab__item" key={id}>
            <button className="tab-button" type="button" onClick={() => onClick(id)}>
              <img src={icon} height="20" alt="" hidden={id === tab} />
              <img src={iconActive} height="20" alt="" hidden={id !== tab} />
              {renderButtonText(id)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TabBar
