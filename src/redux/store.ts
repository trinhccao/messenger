import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../redux-slices/auth-slice'
import usersSlice from '../redux-slices/users-slice'
import threadsSlice from '../redux-slices/threads-slice'
import tabsSlice from '../redux-slices/tabs-slice'
import socketSlice from '../redux-slices/socket-slice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    threads: threadsSlice,
    tabs: tabsSlice,
    socket: socketSlice,
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch