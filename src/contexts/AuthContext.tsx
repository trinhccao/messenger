import { FunctionComponent, ReactNode, createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { IAuthInfo } from '../interfaces/IAuthInfo'
import { useNavigate } from 'react-router-dom'

interface AuthContextProps {
  authInfo?: IAuthInfo
  setAuthInfo?: React.Dispatch<React.SetStateAction<IAuthInfo | undefined>>
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({})
const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [authInfo, setAuthInfo] = useState<IAuthInfo>()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(false)
    if (authInfo) {
      localStorage.setItem('authInfo', JSON.stringify(authInfo))
      axios.defaults.headers.common['Authorization'] =
        `Bearer ${authInfo.token}`
      return
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
