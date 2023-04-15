import axios from 'axios'
import { DataUser } from '../models/DataUser'
import { DataThread } from '../models/DataThread'
import { DataMessage } from '../models/DataMessage'
import { DataAuthResponse } from '../models/DataAuthResponse'

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
    }
  },
  chat: {
    postMessage: async (details: PostMessageDetails) => {
      const { threadId, message } = details
      const url = `/chat/${threadId}`
      const res = await axios.post<DataMessage>(url, { message })
      return res.data
    },
    findById: async (id: string, controller: AbortController) => {
      const url = `/chat/${id}`
      const { signal } = controller
      const res = await axios.get<DataThread>(url, { signal })
      return res.data
    },
    messages: async (controller: AbortController) => {
      const url = `/chat/messages`
      const { signal } = controller
      const res = await axios.get<DataMessage[]>(url, { signal })
      return res.data
    }
  },
  auth: {
    login: async (body: LoginBody) => {
      const url = '/login'
      const res = await axios.post<DataAuthResponse>(url, body)
      return res.data
    }
  }
}

export default api
