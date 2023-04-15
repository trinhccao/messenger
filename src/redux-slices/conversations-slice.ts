import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../redux/store'
import { DataConversation } from '../models/DataConversation'

const initialState: DataConversation[] = []

export const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: initialState as DataConversation[],
  reducers: {
    saveConversations: (state, action: PayloadAction<DataConversation[]>) => {
      return [...action.payload]
    }
  }
})

export const { saveConversations } = conversationsSlice.actions
export const selectConversations = (state: RootState) => state.conversations
export default conversationsSlice.reducer
