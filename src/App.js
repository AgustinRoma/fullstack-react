
import { useState, useEffect } from 'react'
// Bootstrap CSS


import './App.css';

function App() {


  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("")
    .then(res => res.json(), error => setError(error))
    .then(json => setData(json))
    .catch(error => setError(error))
    .finally(() => {
      setIsLoading(false);
    });
  }, [])
    
  return (
    <div>
      <h1>Marvel Search</h1>
      <div>
      </div>
    </div>
  );
}

export default App;
