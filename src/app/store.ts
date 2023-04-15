import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../slices/auth-slice'
import usersSlice from '../slices/users-slice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch