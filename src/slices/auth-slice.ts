import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DataUser } from '../models/DataUser'
import { RootState } from '../app/store'

interface AuthState {
  token: string | undefined
  tokenType: string | undefined
  user: DataUser | null
}

const initialState: AuthState = {
  token: undefined,
  tokenType: undefined,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<AuthState>) => {
      return { ...action.payload }
    }
  }
})

export const { save } = authSlice.actions
export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
