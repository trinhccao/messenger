import { FunctionComponent } from 'react'

const Search: FunctionComponent = () => {
  return (
    <div className="search">
      <div className="container">
        <input className="search__input" type="text" placeholder="Search" />
      </div>
    </div>
  )
}

export default Search
