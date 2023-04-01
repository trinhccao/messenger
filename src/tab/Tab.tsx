import { FunctionComponent } from 'react'

const Nav: FunctionComponent = () => {
  return (
    <div className="tab">
      <div className="container">
        <ul className="tab__list">
          <li className="tab__item">
            <button className="tab__button tab__button--active" type="button">Chat</button>
          </li>
          <li className="tab__item">
            <button className="tab__button" type="button">People</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
