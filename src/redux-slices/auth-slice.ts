import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../redux/store'
import { DataAuth } from '../types/DataAuth'

type AuthSliceState = DataAuth | null

const initialState: AuthSliceState = null

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState as AuthSliceState,
  reducers: {
    saveAuth: (state, action: PayloadAction<DataAuth>) => {
      state = action.payload
      return state
    },
    logout: (state) => {
      localStorage.removeItem('authInfo')
      state = null
      return state
    }
  }
})

export const { saveAuth, logout } = authSlice.actions
export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
