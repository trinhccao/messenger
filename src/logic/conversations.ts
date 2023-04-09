import { Conversation } from '../contexts/ConversationsContext'

function sort(conversations: Conversation) {
  const arr = Object.entries(conversations)
  const sorted = arr.sort((a, b) => {
    const [aLatestMessage] = a[1].slice(-1)
    const [bLatestMessage] = b[1].slice(-1)
    return bLatestMessage.createdAt - aLatestMessage.createdAt
  })
  return sorted.reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: value
    }
  }, {})
}

export { sort }
