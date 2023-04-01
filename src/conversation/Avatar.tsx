import { FunctionComponent } from 'react'

interface AvatarProps {
  image: string
  isOnline: boolean
}

const Avatar: FunctionComponent<AvatarProps> = (props) => {
  const { image, isOnline } = props

  return (
    <div className="avatar avatar--large">
      <img className="avatar__img" src={image} width="60" height="60" alt="" />
      <span className="online-dot online-dot--lg" hidden={!isOnline}>
        <span className="sr-only">Online now</span>
      </span>
    </div>
  )
}

export default Avatar
