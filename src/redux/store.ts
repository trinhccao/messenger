import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../redux-slices/auth-slice'
import usersSlice from '../redux-slices/users-slice'
import conversationsSlice from '../redux-slices/conversations-slice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    conversations: conversationsSlice,
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch