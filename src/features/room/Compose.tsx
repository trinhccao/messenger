import {
  FunctionComponent,
  useState,
  FormEvent,
  ChangeEvent,
  useContext,
} from 'react'
import iconSend from '../../assets/icons/icon-send.png'
import { DataThread } from '../../types/DataThread'
import api from '../../api/api'
import { useAppDispatch } from '../../redux/hooks'
import { addMessage } from '../../redux-slices/threads-slice'
import { SocketContext } from '../../contexts/SocketContext'

interface ComposeProps {
  thread: DataThread
}

const Compose: FunctionComponent<ComposeProps> = ({ thread }) => {
  const [content, setContent] = useState('')
  const [disabled, setDisabled] = useState(true)
  const dispatch = useAppDispatch()
  const { socket } = useContext(SocketContext)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setContent(value)
    setDisabled(!thread || !!value.match(/^\s*$/))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    api.threads
      .addMessage(thread._id, content)
      .then((message) => {
        socket?.emit('message', message)
        dispatch(addMessage(message))
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
