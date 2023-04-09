import axios from "axios"
import { useEffect, useState } from "react"
import { DataThread, ThreadTypes } from "../models/DataThread"

interface UseThread {
  loading: boolean
  thread: DataThread | undefined
}

function useThread(paramId: string): UseThread {
  const [loading, setLoading] = useState(true)
  const [thread, setThread] = useState<DataThread>()

  useEffect(() => {
    if (!paramId) {
      setLoading(false)
      return
    }
    const controller = new AbortController()

    const createThread = async (controller: AbortController) => {
      return await axios.post<DataThread>('/threads',
        { type: ThreadTypes.Direct, receiverId: paramId },
        { signal: controller.signal }
      )
    }

    axios
      .get<DataThread>(`/chat/${paramId}`, { signal: controller.signal })
      .then(async ({ data }) => {
        if (data) {
          return setThread(data)
        }
        const res = await createThread(controller)
        setThread(res.data)
      })

    setLoading(false)
    return () => controller.abort()
  }, [paramId])

  return {loading, thread}
}

export default useThread
