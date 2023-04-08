import { useState, Dispatch, SetStateAction } from 'react'
import { DataAuthResponse } from '../models/DataAuthResponse'
import axios from 'axios'

type UseAuth = [
  DataAuthResponse | undefined,
  Dispatch<SetStateAction<DataAuthResponse | undefined>>
]

function useAuth(): UseAuth {
  const [authInfo, setAuthInfo] = useState<DataAuthResponse>()

  if (authInfo) {
    const token = `${authInfo.tokenType} ${authInfo.token}`
    axios.defaults.headers.common['Authorization'] = token
  } else {
    const savedAuthInfo = localStorage.getItem('authInfo')
    savedAuthInfo && setAuthInfo(JSON.parse(savedAuthInfo))
  }

  return [authInfo, setAuthInfo]
}

export default useAuth
