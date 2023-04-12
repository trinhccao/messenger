import {
  FunctionComponent,
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react'
import { DataAuthResponse } from '../models/DataAuthResponse'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface AuthContextProps {
  authInfo?: DataAuthResponse | undefined
  setAuthInfo?: Dispatch<SetStateAction<DataAuthResponse | undefined>>
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextProps>({})
const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [authInfo, setAuthInfo] = useState<DataAuthResponse>()
  const navigate = useNavigate()

  if (authInfo) {
    const token = `${authInfo.tokenType} ${authInfo.token}`
    axios.defaults.headers.common['Authorization'] = token
    localStorage.setItem('authInfo', JSON.stringify(authInfo))
  } else {
    const savedAuthInfo = localStorage.getItem('authInfo')
    savedAuthInfo && setAuthInfo(JSON.parse(savedAuthInfo))
  }

  useEffect(() => {
    !authInfo && navigate('/login')
  }, [authInfo, navigate])

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
