import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../redux/store'
import { Tabs } from '../features/home/TabBar'

const initialState: Tabs = Tabs.Chat

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState: initialState as Tabs,
  reducers: {
    setTab: (state, action: PayloadAction<Tabs>) => {
      return action.payload
    }
  }
})

export const { setTab } = tabsSlice.actions
export const selectTabs = (state: RootState) => state.tabs
export default tabsSlice.reducer
