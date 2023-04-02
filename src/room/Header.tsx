import { FunctionComponent } from 'react'
import AvatarHeader from './AvatarHeader'
import ButtonBack from './ButtonBack'
import { Scenes } from '../settings/app-config'

interface HeaderProps {
  setActiveScene: React.Dispatch<React.SetStateAction<Scenes>>
}

const Header: FunctionComponent<HeaderProps> = ({setActiveScene}) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <ButtonBack onBack={() => setActiveScene(Scenes.Main)} />
          <AvatarHeader image="/images/dummy-1.jpg" />
          <h3 className="header__title header__title--room">Phuong Anh</h3>
        </div>
      </div>
    </div>
  )
}

export default Header
