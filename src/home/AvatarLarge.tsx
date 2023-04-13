import { FunctionComponent } from 'react'
import nullProfile from '../assets/icons/null-profile@2x.png'

interface AvatarLargeProps {
  image?: string
  isOnline: boolean
}

const AvatarLarge: FunctionComponent<AvatarLargeProps> = (props) => {
  const { image, isOnline } = props

  return (
    <div className="avatar avatar--lg">
      <img
        className={`avatar__img ${image ? '' : 'avatar__img--null'}`}
        src={image || nullProfile}
        width="60"
        height="60"
        alt=""
        loading="lazy"
      />
      <span className="online-dot online-dot--lg" hidden={!isOnline}>
        <span className="sr-only">Online now</span>
      </span>
    </div>
  )
}

export default AvatarLarge