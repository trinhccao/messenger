import { FunctionComponent } from 'react'
import back from '../assets/icons/icon-back.png'

const ButtonBack: FunctionComponent = () => {
  return (
    <button className="button-back" type="button">
      <img className="button-back__img" src={back} width="11" height="19" alt="Back" />
    </button>
  )
}

export default ButtonBack
