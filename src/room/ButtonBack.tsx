import { FunctionComponent } from 'react'
import back from '../assets/icons/icon-back.png'

interface ButtonBackProps {
  onBack: () => void
}

const ButtonBack: FunctionComponent<ButtonBackProps> = ({ onBack }) => {
  return (
    <button className="button-back" type="button" onClick={onBack}>
      <img className="button-back__img" src={back} width="11" height="19" alt="Back" />
    </button>
  )
}

export default ButtonBack
