import { FunctionComponent } from 'react'

interface AvatarLargeProps {
  image: string
  isOnline: boolean
}

const AvatarLarge: FunctionComponent<AvatarLargeProps> = (props) => {
  const { image, isOnline } = props

  return (
    <div className="avatar avatar--lg">
      <img className="avatar__img" src={image} width="60" height="60" alt="" loading="lazy" />
      <span className="online-dot online-dot--lg" hidden={!isOnline}>
        <span className="sr-only">Online now</span>
      </span>
    </div>
  )
}

export default AvatarLarge
