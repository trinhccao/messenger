import { createBrowserRouter } from 'react-router-dom'
import Main from '../main/Main'
import Room from '../room/Room'
import Login from '../login/Login'

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/chat/:receiverId',
    element: <Room />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]

export default createBrowserRouter(routes)
