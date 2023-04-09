import { FunctionComponent, useState, FormEvent, useContext } from 'react'
import iconSend from '../../assets/icons/icon-send.png'
import axios from 'axios'
import { DataThread } from '../../models/DataThread'
import { ConversationsContext } from '../../contexts/ConversationsContext'
import { DataMessage } from '../../models/DataMessage'

interface ComposeProps {
  thread?: DataThread
}

const Compose: FunctionComponent<ComposeProps> = ({ thread }) => {
  const [content, setContent] = useState('')
  const buttonDisabled = !thread || !!content.match(/^\s*$/)
  const { conversations, setConversations } = useContext(ConversationsContext)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!thread) {
      return
    }
    const threadId = thread._id
    const { data } = await axios.post<DataMessage>(`/chat/${threadId}`, {
      message: content
    })
    if (conversations[threadId]) {
      conversations[threadId].push(data)
    } else {
      conversations[threadId] = [data]
    }
    setConversations?.({ ...conversations })
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
