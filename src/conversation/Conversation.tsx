import { FunctionComponent } from 'react'
import Item from './Item'
import Search from './Search'
import Online from './Online'

const Conversation: FunctionComponent = () => {
  return (
    <div className="conversation">
      <div className="conversation__content">
        <Search />
        <Online />
        <ul>
          <li>
            <Item />
          </li>
          <li>
            <Item />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Conversation
