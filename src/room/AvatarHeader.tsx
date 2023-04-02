import { FunctionComponent } from 'react'

interface AvatarHeaderProps {
  image: string
}

const AvatarHeader: FunctionComponent<AvatarHeaderProps> = ({ image }) => {
  return (
    <div className="avatar avatar--xs avatar--header">
      <img className="avatar__img" src={image} width="28" height="28" alt="" loading="lazy" />
    </div>
  )
}

export default AvatarHeader
