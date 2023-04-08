import { FunctionComponent, ReactNode, createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { DataAuthResponse } from '../models/DataAuthResponse'
import { useNavigate } from 'react-router-dom'

interface AuthContextProps {
  authInfo?: DataAuthResponse
  setAuthInfo?: React.Dispatch<React.SetStateAction<DataAuthResponse | undefined>>
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({})
const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [authInfo, setAuthInfo] = useState<DataAuthResponse>()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  if (authInfo) {
    localStorage.setItem('authInfo', JSON.stringify(authInfo))
    axios.defaults.headers.common['Authorization'] =
      `Bearer ${authInfo.token}`
  } else {
    const savedAuthInfo = localStorage.getItem('authInfo')
    savedAuthInfo && setAuthInfo(JSON.parse(savedAuthInfo))
  }

  useEffect(() => {
    setLoading(false)
    !authInfo && navigate('/login')
  }, [navigate, authInfo])

  if (loading) {
    return null
  }

  return (
    <AuthContext.Provider value={{
      authInfo,
      setAuthInfo,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
