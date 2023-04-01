import { FunctionComponent } from 'react'
import Item from './Item'
import Search from './Search'
import Online from './Online'

const Conversation: FunctionComponent = () => {
  return (
    <div className="conversation">
      <Search />
      <Online />
      <ul className="conversation__list">
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
      </ul>
    </div>
  )
}

export default Conversation
