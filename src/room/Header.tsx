import { FunctionComponent } from 'react'
import AvatarHeader from './AvatarHeader'
import ButtonBack from './ButtonBack'
import { useNavigate } from 'react-router-dom'

const Header: FunctionComponent = () => {
  const navigate = useNavigate()

  const onBack = () => {
    navigate('/')
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <ButtonBack onBack={onBack} />
          <AvatarHeader image="/images/dummy-1.jpg" />
          <h3 className="header__title header__title--room">Phuong Anh</h3>
        </div>
      </div>
    </div>
  )
}

export default Header
