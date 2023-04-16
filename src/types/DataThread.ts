export enum ThreadTypes {
  Direct = 'direct',
  Group = 'group',
}

export enum ThreadScopes {
  Any = 'any',
  Member = 'member'
}

export interface ThreadMessage {
  _id: string
  threadId: string
  userId: string
  content: string
  createdAt: number
}

export interface DataThread {
  _id: string
  slug: string
  name: string
  members: string[]
  createdAt: number
  updatedAt: number
  avatar: string
  type: ThreadTypes
  scopes: ThreadScopes[]
  messages: ThreadMessage[]
}
