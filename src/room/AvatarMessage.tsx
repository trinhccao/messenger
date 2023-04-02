import { FunctionComponent } from 'react'

interface AvatarMessageProps {
  image: string
}

const AvatarMessage: FunctionComponent<AvatarMessageProps> = ({ image }) => {
  return (
    <div className="avatar avatar--xs avatar--message">
      <img className="avatar__img" src={image} width="28" height="28" alt="" loading="lazy" />
    </div>
  )
}

export default AvatarMessage
