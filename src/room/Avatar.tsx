import { FunctionComponent } from 'react'

interface AvatarProps {
  image: string
}

const Avatar: FunctionComponent<AvatarProps> = ({ image }) => {
  return (
    <div className="avatar avatar--xs avatar--header">
      <img className="avatar__img" src={image} width="28" height="28" alt="" loading="lazy" />
    </div>
  )
}

export default Avatar
