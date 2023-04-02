import { FunctionComponent } from 'react'

interface AvatarSmallProps {
  image: string
  isOnline: boolean
}

const AvatarSmall: FunctionComponent<AvatarSmallProps> = (props) => {
  const { image, isOnline } = props

  return (
    <div className="avatar avatar--sm">
      <img className="avatar__img" src={image} width="40" height="40" alt="" loading="lazy" />
      <span className="online-dot online-dot--sm" hidden={!isOnline}>
        <span className="sr-only">Online now</span>
      </span>
    </div>
  )
}

export default AvatarSmall
