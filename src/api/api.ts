import axios from 'axios'
import { DataUser } from '../types/DataUser'
import { DataThread, ThreadMessage } from '../types/DataThread'
import { DataAuth } from '../types/DataAuth'

export interface PostMessageDetails {
  threadId: string
  message: string
}

export interface LoginBody {
  username: string
  password: string
}

const api = {
  users: {
    findAll: async (controller: AbortController) => {
      const url = '/users'
      const { signal } = controller
      const res = await axios.get<DataUser[]>(url, { signal })
      return res.data
    }
  },
  threads: {
    findAll: async (controller: AbortController) => {
      const url = '/threads'
      const { signal } = controller
      const res = await axios.get<DataThread[]>(url, { signal })
      return res.data
    },
    addMessage: async (threadId: string, message: string) => {
      const url = `/threads/${threadId}`
      const res = await axios.post<ThreadMessage>(url, { message })
      return res.data
    },
    findById: async (threadId: string, controller: AbortController) => {
      const url = `/threads/${threadId}`
      const { signal } = controller
      const res = await axios.get<DataThread>(url, { signal })
      return res.data
    }
  },
  auth: {
    login: async (body: LoginBody) => {
      const url = '/login'
      const res = await axios.post<DataAuth>(url, body)
      return res.data
    }
  },
  chat: {
    findThreadId: async (slug: string, controller: AbortController) => {
      const url = `/chat/${slug}`
      const { signal } = controller
      const res = await axios.get<string | DataThread>(url, { signal })
      return res.data
    }
  }
}

export default api
