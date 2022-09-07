import React from 'react';
import Card from 'react-bootstrap/Card';
import launchModal from '../utils/launchModal';


const DrinksCard = ({drinks}) => {
  const handleDrinks = () => {    
    launchModal(drinks)
  }

  return (
    <article className="card" onClick={handleDrinks}>
      <div className="card-image">
        <img src={drinks.strDrinkThumb} alt={drinks.strDrink} />
      </div>
      <div className="card-content">
        <h2 className="card-name">{drinks.strDrink}</h2>
      </div>
    </article>
  )
}

export default DrinksCard;