import { DataMessage } from "./DataMessage"

export enum ThreadTypes {
  Direct = 'direct',
  Group = 'group',
}

export interface DataThread {
  _id: string
  name: string
  members: string[]
  createdAt: number
  updatedAt: number
  avatar: string
  type: ThreadTypes
  messages: DataMessage[]
}
