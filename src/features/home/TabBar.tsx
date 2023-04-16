import { FunctionComponent } from 'react'
import iconChat from '../../assets/icons/icon-chat.png'
import iconChatActive from '../../assets/icons/icon-chat-active.png'
import iconPeople from '../../assets/icons/icon-people.png'
import iconPeopleActive from '../../assets/icons/icon-people-active.png'
import { useAppDispatch } from '../../redux/hooks'
import { setTab } from '../../redux-slices/tabs-slice'
import { Tabs } from '../../types/EnumTabs'

const tabs = [
  {
    name: Tabs.Chat,
    icon: iconChat,
    iconActive: iconChatActive,
  },
  {
    name: Tabs.People,
    icon: iconPeople,
    iconActive: iconPeopleActive,
  }
]

interface TabBarProps {
  tab: Tabs
}

const TabBar: FunctionComponent<TabBarProps> = ({ tab }) => {
  const dispatch = useAppDispatch()

  const onClick = (tab: Tabs) => {
    dispatch(setTab(tab))
  }

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
        {tabs.map(({ name, icon, iconActive }) => (
          <li className="tab__item" key={name}>
            <button
              className="tab-button"
              type="button"
              onClick={() => onClick(name)}
            >
              <img src={icon} height="20" alt="" hidden={name === tab} />
              <img src={iconActive} height="20" alt="" hidden={name !== tab} />
              {renderButtonText(name)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TabBar
