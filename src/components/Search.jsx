import React from 'react'

const Search = ({setQuery}) => {

    const handleSearchDrinks = (e) => setQuery(e.target.value);

    return (
        <form className="search-wrapper">
            <label htmlFor="search-form">
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Search for..."
                    onChange={handleSearchDrinks} />
            </label>
        </form>
    )
}

export default Search