export enum ThreadTypes {
  Direct = 'direct',
  Group = 'group',
}

export enum ThreadScopes {
  Any = 'any',
  Member = 'member'
}

export interface DataThread {
  _id: string
  name: string
  members: string[]
  createdAt: number
  updatedAt: number
  avatar: string
  type: ThreadTypes
  scopes: ThreadScopes[]
}
