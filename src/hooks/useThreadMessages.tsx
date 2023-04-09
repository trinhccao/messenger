import axios from 'axios'
import { useEffect, useState } from 'react'
import { DataMessage } from '../models/DataMessage'

interface UseThreadMessages {
  loading: boolean
  messages: DataMessage[]
}

function useThreadMessages(threadId: string): UseThreadMessages {
  const [loading, setLoading] = useState(true)
  const [messages, setMessages] = useState<DataMessage[]>([])

  useEffect(() => {
    if (!threadId) {
      setLoading(false)
      return
    }
    const controller = new AbortController()
    axios
      .get<DataMessage[]>(`/threads/${threadId}/messages`, {
        signal: controller.signal
      })
      .then(async ({ data }) => setMessages(data))
    setLoading(false)
    return () => controller.abort()
  }, [threadId])

  return { loading, messages }
}

export default useThreadMessages
