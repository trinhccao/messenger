import { DataMessage } from '../models/DataMessage'

export type Messages = Record<string, DataMessage[]>

function messagesReducer(
  state: Messages = {},
  action: { payload: DataMessage[] },
) {
  const { payload } = action
  const messages = window.structuredClone(state) as Messages
  payload.forEach((message) => {
    if (messages[message.threadId]) {
      messages[message.threadId].push(message)
    } else {
      messages[message.threadId] = [message]
    }
  })
  return messages
}

export default messagesReducer
