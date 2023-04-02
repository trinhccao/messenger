import { FunctionComponent } from 'react'
import Header from './Header'
import Tab from './Tab'
import Conversation from './Conversation'
import People from './People'

interface MainProps {
  hidden?: boolean
}

const Main: FunctionComponent<MainProps> = ({ hidden }) => {
  return (
    <div className="app-viewport" id="main" hidden={hidden}>
      <Header />
      <Tab />
      <div className="app-content">
        <div className="app-content__inner">
          <Conversation />
          <People hidden />
        </div>
      </div>
    </div>
  )
}

export default Main
