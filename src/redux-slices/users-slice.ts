import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../redux/store'
import { DataUser } from '../models/DataUser'

const initialState: DataUser[] = []

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState as DataUser[],
  reducers: {
    saveUsers: (state, action: PayloadAction<DataUser[]>) => {
      return [...action.payload]
    }
  }
})

export const { saveUsers } = usersSlice.actions
export const selectUsers = (state: RootState) => state.users
export default usersSlice.reducer
