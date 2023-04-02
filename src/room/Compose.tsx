import { FunctionComponent } from 'react'
import iconSend from '../assets/icons/icon-send.png'

const Compose: FunctionComponent = () => {
  return (
    <div className="tab">
      <div className="compose">
        <input className="compose__input" type="text" placeholder="Aa" />
        <button className="button-send button-send--compose" type="button">
          <img className="button-send__icon" src={iconSend} width="22" height="22" alt="Send" />
        </button>
      </div>
    </div>
  )
}

export default Compose
