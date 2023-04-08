import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { DataAuthResponse } from '../models/DataAuthResponse'
import axios from 'axios'

type UseAuth = [
  boolean,
  DataAuthResponse | undefined,
  Dispatch<SetStateAction<DataAuthResponse | undefined>>
]

function useAuth(): UseAuth {
  const [loading, setLoading] = useState(true)
  const [authInfo, setAuthInfo] = useState<DataAuthResponse>()

  if (!loading && authInfo) {
    const token = `${authInfo.tokenType} ${authInfo.token}`
    axios.defaults.headers.common['Authorization'] = token
  }

  useEffect(() => {
    setLoading(false)
    if (authInfo) {
      return
    }
    const savedAuthInfo = localStorage.getItem('authInfo')
    if (!savedAuthInfo) {
      return
    }
    setAuthInfo(JSON.parse(savedAuthInfo))
  }, [authInfo])

  return [loading, authInfo, setAuthInfo]
}

export default useAuth
