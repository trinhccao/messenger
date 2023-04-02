import { FunctionComponent } from 'react'
import iconChat from '../assets/icons/icon-chat.png'
import iconChatActive from '../assets/icons/icon-chat-active.png'
import iconPeople from '../assets/icons/icon-people.png'
import iconPeopleActive from '../assets/icons/icon-people-active.png'

const Tab: FunctionComponent = () => {
  return (
    <div className="tab">
      <ul className="tab__list">
        <li className="tab__item">
          <button className="tab-button" type="button">
            <img src={iconChat} height="30" alt="" hidden />
            <img src={iconChatActive} height="30" alt="" />
            <span className="tab-button__text tab-button__text--active">Chat</span>
          </button>
        </li>
        <li className="tab__item">
          <button className="tab-button" type="button">
            <img src={iconPeople} height="30" alt="" />
            <img src={iconPeopleActive} height="30" alt="" hidden />
            <span className="tab-button__text">People</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Tab
