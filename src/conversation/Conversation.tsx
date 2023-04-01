import { FunctionComponent } from 'react'
import Item from './Item'

const Conversation: FunctionComponent = () => {
  return (
    <div className="conversation">
      <ul>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
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
