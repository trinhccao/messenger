import { FunctionComponent } from 'react'
import Avatar from '../header/Avatar'
import ButtonBack from './ButtonBack'

interface HeaderProps {
  hidden?: boolean
}

const Header: FunctionComponent<HeaderProps> = ({ hidden }) => {
  return (
    <div className="header" hidden={hidden}>
      <div className="container">
        <div className="header__inner">
          <ButtonBack />
          <Avatar image="/images/dummy-1.jpg" />
          <h3 className="header__title header__title--room">Phuong Anh</h3>
        </div>
      </div>
    </div>
  )
}

export default Header
