import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../redux/store'
import { DataUser } from '../types/DataUser'

const initialState: DataUser[] = []

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState as DataUser[],
  reducers: {
    saveUsers: (state, action: PayloadAction<DataUser[]>) => {
      return [...action.payload]
    },
    addUser: (state, action: PayloadAction<DataUser>) => {
      state.push(action.payload)
      return state
    },
    sortOnline: (state, action: PayloadAction<string[]>) => {
      const idsOrder = action.payload
      state.sort((a, b) => {
        const indexA = idsOrder.findIndex((id) => id === a._id)
        const indexB = idsOrder.findIndex((id) => id === b._id)
        return indexB - indexA
      })
      return state
    }
  }
})

export const { saveUsers, addUser, sortOnline } = usersSlice.actions
export const selectUsers = (state: RootState) => state.users
export default usersSlice.reducer
