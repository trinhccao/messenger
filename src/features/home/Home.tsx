import { FunctionComponent } from 'react'
import TabBar, { Tabs } from './TabBar'
import Header from './Header'
import Search from './Search'
import OnlineBar from './OnlineBar'
import Conversations from './Conversations'
import PeopleItem from './PeopleItem'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectUsers } from '../../redux-slices/users-slice'
import { selectTabs, setTab } from '../../redux-slices/tabs-slice'

const Home: FunctionComponent = () => {
  const tab = useAppSelector(selectTabs)
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsers)

  return (
    <div className="home">
      <TabBar tab={tab} onClick={(tab) => dispatch(setTab(tab))} />
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
