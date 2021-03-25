import React, { useState } from 'react';
import mockData from '../../mockData/MOCK_DATA.json';
import FoodItem from './FoodItem';
const Food = () => {
    const [foods, setFoods] = useState(mockData);
console.log(foods)
    return (
      <>
        <div className="container">
          <div className='d-flex justify-content-center'>
            <h6>Breakfast</h6>
            <h6>Dinner</h6>
            <h6>Lunch</h6>
          </div>
          <div div className="row row-cols-1 row-cols-md-3 g-4">
            {foods.slice(0,6).map((food) => (
              <FoodItem food={food} key={food.id}></FoodItem>
            ))}
          </div>
          <div div className="row row-cols-1 row-cols-md-3 g-4">
            {foods.slice(6,12).map((food) => (
              <FoodItem food={food} key={food.id}></FoodItem>
            ))}
          </div>
          <div div className="row row-cols-1 row-cols-md-3 g-4">
            {foods.slice(12,18).map((food) => (
              <FoodItem food={food} key={food.id}></FoodItem>
            ))}
          </div>
        </div>
      </>
    );
};

export default Food;