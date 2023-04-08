import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { DataMessage } from '../models/DataMessage'
import axios from 'axios'
import useAuth from './useAuth'

export type Conversation = Record<string, DataMessage[]>

type UseConversations = [
  Conversation,
  Dispatch<SetStateAction<Conversation>>
]

function useConversations(): UseConversations {
  const [loading, authInfo] = useAuth()
  const [conversations, setConversations] = useState<Conversation>({})

  useEffect(() => {
    if (loading) {
      return
    }

    const controller = new AbortController()
    axios
      .get<DataMessage[]>('/messages', { signal: controller.signal })
      .then(({ data }) => {
        const conversations = data.reduce((previous: Conversation, message) => {
          if (previous[message.threadId]) {
            previous[message.threadId].push(message)
          } else {
            previous[message.threadId] = [message]
          }
          return previous
        }, {})
        setConversations(conversations as Conversation)
      })

    return () => controller.abort()
  }, [authInfo, loading])

  return [conversations, setConversations]
}

export default useConversations
