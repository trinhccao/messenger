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
    }
  }
})

export const { saveUsers, addUser } = usersSlice.actions
export const selectUsers = (state: RootState) => state.users
export default usersSlice.reducer
