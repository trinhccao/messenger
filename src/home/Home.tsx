import { FunctionComponent } from 'react'
import HomeHeader from './Header'
import Conversations from './Conversations'
import Search from './Search'
import OnlineBar from './OnlineBar'

const Home: FunctionComponent = () => {
  return (
    <>
      <HomeHeader />
      <div className="app-content">
        <div className="app-content__inner">
          <Search />
          <OnlineBar />
          <Conversations />
        </div>
      </div>
    </>
  )
}

export default Home
