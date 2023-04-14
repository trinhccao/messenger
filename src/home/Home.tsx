import { FunctionComponent, useContext, useEffect, useState } from 'react'
import Tab, { Tabs } from './Tab'
import { DataUser } from '../models/DataUser'
import { DataThread } from '../models/DataThread'
import { AuthContext } from '../contexts/AuthContext'
import Header from './Header'
import Search from './Search'
import OnlineBar from './OnlineBar'
import Conversations from './Conversations'
import PeopleItem from './PeopleItem'
import api from '../api/api'

const Home: FunctionComponent = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.Chat)
  const [users, setUsers] = useState<DataUser[]>([])
  const [threads, setThreads] = useState<DataThread[]>([])
  const { authInfo } = useContext(AuthContext)

  useEffect(() => {
    const controller = new AbortController()
    api.users.findAll(controller).then((users) => setUsers(users))
    return () => controller.abort()
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    api.threads.findAll(controller).then((threads) => setThreads(threads))
    return () => controller.abort()
  }, [authInfo?.user._id])

  return (
    <div className="home">
      <Tab tab={tab} onClick={(tab) => setTab(tab)} />
      <div className="home__content">
        <div className="chat" hidden={tab !== Tabs.Chat}>
          <Header />
          <Search users={users} />
          <OnlineBar />
          <Conversations threads={threads} />
        </div>
        <div className="people" hidden={tab !== Tabs.People}>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <PeopleItem user={user} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
