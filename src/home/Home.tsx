import { FunctionComponent, useEffect, useState } from 'react'
import Tab, { Tabs } from './Tab'
import { DataThread } from '../models/DataThread'
import Header from './Header'
import Search from './Search'
import OnlineBar from './OnlineBar'
import Conversations from './Conversations'
import PeopleItem from './PeopleItem'
import api from '../api/api'
import { useAppSelector } from '../app/hooks'
import { selectAuth } from '../slices/auth-slice'
import { selectUsers } from '../slices/users-slice'

const Home: FunctionComponent = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.Chat)
  const [threads, setThreads] = useState<DataThread[]>([])
  const auth = useAppSelector(selectAuth)
  const users = useAppSelector(selectUsers)

  useEffect(() => {
    const controller = new AbortController()
    api.threads.findAll(controller).then((threads) => setThreads(threads))
    return () => controller.abort()
  }, [auth])

  return (
    <div className="home">
      <Tab tab={tab} onClick={(tab) => setTab(tab)} />
      <div className="home__content">
        <div className="chat" hidden={tab !== Tabs.Chat}>
          <Header />
          <Search />
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
