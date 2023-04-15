import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { DataThread } from '../models/DataThread'

const initialState: DataThread[] = []

export const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: initialState as DataThread[],
  reducers: {
    saveConversations: (state, action: PayloadAction<DataThread[]>) => {
      return [...action.payload]
    }
  }
})

export const { saveConversations } = conversationsSlice.actions
export const selectConversations = (state: RootState) => state.conversations
export default conversationsSlice.reducer
