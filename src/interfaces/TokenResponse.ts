import { IUser } from "./IUser"

export interface TokenResponse {
  token: string
  tokenType: string
  user: IUser
}
