import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const Search = ({ setCocteles }) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleFilter = (e) => {
        e.preventDefault();
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target.value}`)
            .then((response) => response.json())
            .then((data) => {
                setCocteles(data.drinks);
            },
                (error) => {
                    setIsLoading(true);
                }
            )
            .finally(() => {
                setIsLoading(false);
            });
    };

    if (isLoading) {
        return (
            <div className="App">
                <Spinner animation="grow" variant="dark" />
            </div>
        );
    }

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
                        onChange={handleFilter} />
                </label>
            </form>
        </>
    );
};

export default Search;