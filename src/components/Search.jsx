import React, { useState } from "react";

const Search = ({ setCocteles }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = (e) => {
        /* e.preventDefault(); */
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.drinks) {
                    setCocteles(data.drinks);
                } else if(data.drinks == null) {
                    
                    return
                }
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