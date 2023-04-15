import { DataMessage } from './DataMessage'
import { DataThread } from './DataThread'

export interface DataConversation {
  thread: DataThread
  messages: DataMessage[]
}
