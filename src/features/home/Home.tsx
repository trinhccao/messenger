import { FunctionComponent, useState } from 'react'
import Tab, { Tabs } from './Tab'
import Header from './Header'
import Search from './Search'
import OnlineBar from './OnlineBar'
import Conversations from './Conversations'
import PeopleItem from './PeopleItem'
import { useAppSelector } from '../../redux/hooks'
import { selectUsers } from '../../redux-slices/users-slice'

const Home: FunctionComponent = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.Chat)
  const users = useAppSelector(selectUsers)

  return (
    <div className="home">
      <Tab tab={tab} onClick={(tab) => setTab(tab)} />
      <div className="home__content">
        <div className="chat" hidden={tab !== Tabs.Chat}>
          <Header />
          <Search />
          <OnlineBar />
          <Conversations />
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
