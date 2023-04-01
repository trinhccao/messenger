import { FunctionComponent } from 'react'
import './Avatar.css'

interface AvatarProps {
  image: string
  isOnline: boolean
}

const Avatar: FunctionComponent<AvatarProps> = (props) => {
  return (
    <div className="avatar"></div>
  )
}

export default Avatar
