import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../redux/store'

export interface SocketState {
  connected: boolean
  clientIds: string[]
}

const initialState: SocketState = {
  connected: false,
  clientIds: [],
}

export const socketSlice = createSlice({
  name: 'socket',
  initialState: initialState as SocketState,
  reducers: {
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload
      return state
    },
    setClientIds: (state, action: PayloadAction<string[]>) => {
      state.clientIds = action.payload
      return state
    }
  }
})

export const { setConnected, setClientIds } = socketSlice.actions
export const selectSocket = (state: RootState) => state.socket
export default socketSlice.reducer
