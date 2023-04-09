import { Conversation } from '../contexts/ConversationsContext'
import { DataMessage } from '../models/DataMessage';

export interface ConversationAction {
  type: 'init' | 'append'
  payload: DataMessage[]
}

function conversationReducer(
  state: Conversation,
  action: ConversationAction,
) {
  const { type, payload } = action

  switch (type) {
    case 'init': {
      const conversations = payload.reduce((conv: Conversation, msg) => {
        if (conv[msg.threadId]) {
          conv[msg.threadId].push(msg)
        } else {
          conv[msg.threadId] = [msg]
        }
        return conv
      }, {})
      return conversations
    }

    case 'append': {
      const newConversations = { ...state }
      const { threadId } = payload[0]
      if (newConversations[threadId]) {
        newConversations[threadId] = [...newConversations[threadId]]
        newConversations[threadId].push(...payload)
      } else {
        newConversations[threadId] = payload
      }
      return newConversations
    }
  }

}

export default conversationReducer
