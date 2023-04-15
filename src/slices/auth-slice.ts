import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { DataAuth } from '../models/DataAuth'

type AuthSliceState = DataAuth | null

const initialState: AuthSliceState = null

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState as AuthSliceState,
  reducers: {
    save: (state, action: PayloadAction<DataAuth>) => {
      return { ...action.payload }
    }
  }
})

export const { save } = authSlice.actions
export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
