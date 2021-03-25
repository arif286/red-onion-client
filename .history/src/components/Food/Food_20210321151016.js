import React, { useState } from 'react';
import mockData from '../../mockData/MOCK_DATA.json';
const Food = () => {
    const [foods, setFoods] = useState(mockData);

    return (
      <>
        <div className='container'>
          <div>
              <h5>Breakfast</h5>
              <h5>Dinner</h5>
              <h5>Lunch</h5>
            </div>
            {
                foods.slice(0,6).map(food=>console.log(food) )
            }
        </div>
      </>
    );
};

export default Food;