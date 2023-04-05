import { FunctionComponent, ReactNode, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { TokenResponse } from '../interfaces/TokenResponse'

interface AuthContextProps {
  authInfo?: TokenResponse
  setAuthInfo?: React.Dispatch<React.SetStateAction<TokenResponse | undefined>>
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({})
const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [authInfo, setAuthInfo] = useState<TokenResponse>()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(false)
    if (authInfo) {
      localStorage.setItem('authInfo', JSON.stringify(authInfo))
      axios.defaults.headers.common['Authorization'] =
        `Bearer ${authInfo.token}`
      return navigate('/')
    }
    const savedAuthInfo = localStorage.getItem('authInfo')
    if (!savedAuthInfo) {
      return navigate('/login')
    }
    setAuthInfo(JSON.parse(savedAuthInfo))
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
