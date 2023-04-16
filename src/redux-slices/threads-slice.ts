import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../redux/store'
import { DataThread, ThreadMessage } from '../models/DataThread'

const initialState: DataThread[] = []

export const threadsSlice = createSlice({
  name: 'threads',
  initialState: initialState as DataThread[],
  reducers: {
    saveThreads: (state, action: PayloadAction<DataThread[]>) => {
      state = action.payload
      return state
    },
    addThread: (state, action: PayloadAction<DataThread>) => {
      state.unshift(action.payload)
      return state
    },
    addMessage: (state, action: PayloadAction<ThreadMessage>) => {
      const message = action.payload
      const thread = state.find((item) => item._id === message.threadId)
      if (thread) {
        thread.messages.push(message)
        thread.updatedAt = Date.now()
        state.sort((a, b) => b.updatedAt - a.updatedAt)
      }
      return state
    }
  }
})

export const {
  saveThreads,
  addThread,
  addMessage,
} = threadsSlice.actions
export const selectThreads = (state: RootState) => state.threads
export default threadsSlice.reducer
