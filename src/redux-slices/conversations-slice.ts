import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../redux/store'
import { DataConversation } from '../models/DataConversation'
import { DataThread } from '../models/DataThread'
import { DataMessage } from '../models/DataMessage'

const initialState: DataConversation[] = []

export const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: initialState as DataConversation[],
  reducers: {
    saveConversations: (state, action: PayloadAction<DataConversation[]>) => {
      return [...action.payload]
    },
    addConversation: (state, action: PayloadAction<DataThread>) => {
      const { payload } = action
      const conv = state.find(({ thread }) => thread._id === payload._id)
      if (!conv) {
        state.push({
          thread: payload,
          messages: []
        })
      }
      return state
    },
    addMessages: (state, action: PayloadAction<DataMessage[]>) => {
      const messages = action.payload
      messages.forEach((message) => {
        const conv = state.find(({ thread }) => {
          return thread._id === message.threadId
        })
        if (conv) {
          conv.messages.push(message)
        }
      })
      return state
    }
  }
})

export const {
  saveConversations,
  addConversation,
  addMessages,
} = conversationsSlice.actions
export const selectConversations = (state: RootState) => state.conversations
export default conversationsSlice.reducer
