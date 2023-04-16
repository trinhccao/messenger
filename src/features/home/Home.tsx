import { FunctionComponent } from 'react'
import TabBar from './TabBar'
import Header from './Header'
import Search from './Search'
import OnlineBar from './OnlineBar'
import Conversations from './Conversations'
import PeopleItem from './PeopleItem'
import { useAppSelector } from '../../redux/hooks'
import { selectUsers } from '../../redux-slices/users-slice'
import { selectTabs } from '../../redux-slices/tabs-slice'
import { Tabs } from '../../types/EnumTabs'

const Home: FunctionComponent = () => {
  const tab = useAppSelector(selectTabs)
  const users = useAppSelector(selectUsers)

  return (
    <div className="home">
      <TabBar tab={tab} />
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
