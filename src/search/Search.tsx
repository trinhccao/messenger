import { FunctionComponent } from 'react'
import './Search.css'

const Search: FunctionComponent = () => {
  return (
    <div className="container">
      <input className="search" type="text" placeholder="Search" />
    </div>
  )
}

export default Search
