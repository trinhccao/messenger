import { FunctionComponent } from 'react'

interface AvatarMessageProps {
  src: string
}

const AvatarMessage: FunctionComponent<AvatarMessageProps> = ({ src }) => {
  return (
    <div className="avatar avatar--xs avatar--message">
      <img
        className="avatar__img"
        src={src}
        width="28"
        height="28"
        alt=""
        loading="lazy"
      />
    </div>
  )
}

export default AvatarMessage
