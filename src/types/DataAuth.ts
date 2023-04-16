import { DataUser } from './DataUser'

export interface DataAuth {
  token: string
  tokenType: string
  user: DataUser
}
