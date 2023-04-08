import { FunctionComponent, useState, FormEvent } from 'react'
import iconSend from '../assets/icons/icon-send.png'
import { Thread } from '../../contexts/ThreadContext'
import axios from 'axios'

interface ComposeProps {
  thread?: Thread
}

const Compose: FunctionComponent<ComposeProps> = ({ thread }) => {
  const [content, setContent] = useState('')
  const buttonDisabled = !thread || !!content.match(/^\s*$/)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await axios.post(`/chat/${thread?._id}`, { message: content })
    setContent('')
  }

  return (
    <div className="tab">
      <form className="compose" action="#" onSubmit={onSubmit}>
        <input
          className="compose__input"
          type="text"
          placeholder="Aa"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="button-send button-send--compose"
          type="submit"
          disabled={buttonDisabled}
        >
          <img
            className="button-send__icon"
            src={iconSend}
            width="22"
            height="22"
            alt="Send"
          />
        </button>
      </form>
    </div>
  )
}

export default Compose
