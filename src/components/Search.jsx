import React, { useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

const Search = ({ setCocteles }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = (e) => {
        /* e.preventDefault(); */
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value}`)
            .then((response) => response.json())
            .then((data) => {
                setCocteles(data.drinks);
            })
            .catch(error => setError(error))
    };

    return (
        <>
            <form className="search-wrapper">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="cmbIngrediente"
                        className="search-input"
                        placeholder="Buscar por categoria"
                        onChange={handleSearch} />
                </label>
            </form>
        </>
    );
};

export default Search;