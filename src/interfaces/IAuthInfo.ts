import { IUser } from "./IUser"

export interface IAuthInfo {
  token: string
  tokenType: string
  user: IUser
}
