import { DataUser } from './DataUser'

export interface DataAuthResponse {
  token: string
  tokenType: string
  user: DataUser
}
