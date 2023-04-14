import axios from 'axios'
import { DataUser } from '../models/DataUser'
import { DataThread } from '../models/DataThread'

const api = {
  users: {
    findAll: async (controller: AbortController) => {
      const url = '/users'
      const res = await axios.get<DataUser[]>(url, {
        signal: controller.signal
      })
      return res.data
    }
  },
  threads: {
    findAll: async (controller: AbortController) => {
      const url = '/threads'
      const res = await axios.get<DataThread[]>(url, {
        signal: controller.signal
      })
      return res.data
    }
  }
}

export default api
