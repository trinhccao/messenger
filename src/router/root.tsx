import { createBrowserRouter } from 'react-router-dom'
import Main from '../main/Main'
import Room from '../room/Room'

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/chat/:receiverId',
    element: <Room />,
  },
]

export default createBrowserRouter(routes)
