import { FunctionComponent, useState } from 'react'
import People from './People'
import Tab, { Tabs } from './Tab'
import Chat from './Chat'

const Home: FunctionComponent = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.Chat)

  return (
    <div className="home">
      <Tab tab={tab} onClick={(tab) => setTab(tab)} />
      <div className="home__content">
        <Chat hidden={tab !== Tabs.Chat} />
        <People hidden={tab !== Tabs.People} />
      </div>
    </div>
  )
}

export default Home
