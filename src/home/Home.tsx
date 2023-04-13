import { FunctionComponent, useEffect, useState } from 'react'
import People from './People'
import Tab, { Tabs } from './Tab'
import Chat from './Chat'
import { DataUser } from '../models/DataUser'
import axios from 'axios'

const Home: FunctionComponent = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.Chat)
  const [users, setUsers] = useState<DataUser[]>([])

  useEffect(() => {
    const controller = new AbortController()
    axios
      .get<DataUser[]>('/users', { signal: controller.signal })
      .then(({ data }) => setUsers(data))
    return () => controller.abort()
  }, [])

  return (
    <div className="home">
      <Tab tab={tab} onClick={(tab) => setTab(tab)} />
      <div className="home__content">
        <Chat users={users} hidden={tab !== Tabs.Chat} />
        <People hidden={tab !== Tabs.People} />
      </div>
    </div>
  )
}

export default Home
