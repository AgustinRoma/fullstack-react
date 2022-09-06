
import { useState, useEffect } from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"

import MoviesCard from "./components/MoviesCard";


import './App.css';

function App() {
  const [cocteles, setCocteles] = useState([])
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [paginate, setPaginate] = useState(12);

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

  return (
    <div >
        <div className="wrapper">
          {cocteles.length > 0 && (
            <>
              <section className="card-grid">
                {
                  cocteles
                    .slice(0, paginate)
                    .map((item) => {
                      return <MoviesCard key={item} drinks={item} />;
                    })
                }
              </section></>
          )}
        </div>
      </div>
   
  );
}

export default App;
