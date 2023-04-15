import axios from 'axios'
import { DataAuth } from '../models/DataAuth'

const authLogic = {
  saveAuthToStorage: (auth: DataAuth) => {
    const token = `${auth.tokenType} ${auth.token}`
    axios.defaults.headers.common['Authorization'] = token
    localStorage.setItem('authInfo', JSON.stringify(auth))
  },
  getSavedToken: () => {
    const savedAuthInfo = localStorage.getItem('authInfo')
    if (savedAuthInfo) {
      return JSON.parse(savedAuthInfo) as DataAuth
    }
    return null
  }
}

export default authLogic
