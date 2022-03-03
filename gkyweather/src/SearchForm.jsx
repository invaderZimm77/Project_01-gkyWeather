import React from 'react'


export default function SearchForm() {
  return (
	<form className='search-form'>
		<input type="text" id="boxie" placeholder="Search for a city" autofocus />
          <button id="search" type="search">Search</button>
          <span className="msg"></span>
	</form>
  )
}
