import iconChat from '../assets/icons/icon-chat.png'
import iconChatActive from '../assets/icons/icon-chat-active.png'
import iconPeople from '../assets/icons/icon-people.png'
import iconPeopleActive from '../assets/icons/icon-people-active.png'

export enum TabIds {
  Chat = 'Chat',
  People = 'People'
}

const textClasses = 'button-text'
const textActiveClasses = 'button-text button-text--active'

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

export {
  textClasses,
  textActiveClasses,
  tabs,
}
