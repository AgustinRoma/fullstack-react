
import { useState, useEffect } from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"

import DrinksCard from "./components/DrinksCard";
import LoadNext from './components/LoadNext';


import './App.css';
import Search from './components/Search';

function App() {
  const [cocteles, setCocteles] = useState([])
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [paginate, setPaginate] = useState(10);

  function searchDrinks(drinks) {
    return drinks.filter((item) => 
      item.strCategory.includes(filter) /* &&
      search_params.some((parameter) =>
        item[parameter].toString().toLowerCase().includes(query.toLowerCase())
      ) */
    )
  }

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
    .then((res) =>res.json())
    .then((data) => {
      console.log(data.drinks);
      setCocteles(data.drinks);
    })
    .catch(error => setError(error))
    .finally(() => {
      setIsLoading(false);
    });
  }, [])

  const data = Object.values(cocteles);
  const search_params = Object.assign({}, ...data);

  function load_next() {
    setPaginate((prevState) => prevState + 10);
  }

  return (
    <div >
      <Search  setQuery={setQuery}/>
        <div className="wrapper">
          {cocteles.length > 0 && (
              <section className="card-grid">
                {
                    searchDrinks(data)
                    .slice(0, paginate)
                    .map((item) => {
                      return <DrinksCard key={item} drinks={item} />;
                    })
                }
              </section>            
          )}
          <LoadNext load_next={load_next} />
        </div>
      </div>
   
  );
}

export default App;
