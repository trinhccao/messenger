import { FunctionComponent } from 'react'
import People from './People'
import { Tabs } from '../tab/Tab'
import Chat from './Chat'

interface HomeProps {
  tab: Tabs
}

const Home: FunctionComponent<HomeProps> = ({ tab }) => {
  return (
    <div className="app-content">
      <div className="app-content__inner">
        {tab === Tabs.Chat ? <Chat /> : <People />}
      </div>
    </div>
  )
}

export default Home
