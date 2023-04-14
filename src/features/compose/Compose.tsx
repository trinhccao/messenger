import {
  FunctionComponent,
  useState,
  FormEvent,
  useContext,
  ChangeEvent,
} from 'react'
import iconSend from '../../assets/icons/icon-send.png'
import { DataThread } from '../../models/DataThread'
import { MessagesContext } from '../../contexts/MessagesContext'
import api from '../../api/api'

interface ComposeProps {
  thread: DataThread
}

const Compose: FunctionComponent<ComposeProps> = ({ thread }) => {
  const [content, setContent] = useState('')
  const [disabled, setDisabled] = useState(true)
  const { dispatchMessages } = useContext(MessagesContext)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
    setDisabled(!thread || !!content.match(/^\s*$/))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    api.chat.postMessage({
      threadId: thread._id,
      message: content,
    }).then((message) => {
      dispatchMessages?.({ payload: [message] })
      setDisabled(false)
    })
    setDisabled(true)
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
          onChange={onChange}
        />
        <button
          className="button-send button-send--compose"
          type="submit"
          disabled={disabled}
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
