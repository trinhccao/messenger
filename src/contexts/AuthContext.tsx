import {
  FunctionComponent,
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { DataAuthResponse } from '../models/DataAuthResponse'
import axios from 'axios'

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

  if (authInfo) {
    const token = `${authInfo.tokenType} ${authInfo.token}`
    axios.defaults.headers.common['Authorization'] = token
  } else {
    const savedAuthInfo = localStorage.getItem('authInfo')
    savedAuthInfo && setAuthInfo(JSON.parse(savedAuthInfo))
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
