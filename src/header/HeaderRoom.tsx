import { FunctionComponent } from 'react'
import Avatar from '../room/Avatar'
import ButtonBack from '../room/ButtonBack'

const HeaderRoom: FunctionComponent = () => {
  return (
    <div className="header">
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

export default HeaderRoom
