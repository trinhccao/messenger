import { FunctionComponent } from 'react'
import Header from './Header'
import Conversations from './Conversations'
import Search from './Search'
import OnlineBar from './OnlineBar'
import People from './People'

const Home: FunctionComponent = () => {
  return (
    <>
      <div className="app-content">
        <div className="app-content__inner">
          <>
            <Header />
            <Search />
            <OnlineBar />
            <Conversations />
          </>
          {/* <People /> */}
        </div>
      </div>
    </>
  )
}

export default Home
