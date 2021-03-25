import { Panel, Tab, Tabs } from "@bumaga/tabs";
import React, { useState } from 'react';
import mockData from '../../mockData/MOCK_DATA.json';
import './Food.css';

const Food = () => {
  const [foods, setFoods] = useState(mockData);

  const handleFood = (e) => {
console.log('click me')
  }
    return (
      <>
        <Tabs>
          <div>
            <Tab>
              <button>Tab 1</button>
            </Tab>
            <Tab>
              <button>Tab 2</button>
            </Tab>
            <Tab>
              <button>Tab 3</button>
            </Tab>
          </div>

          <Panel>
            <p>Panel 1</p>
          </Panel>
          <Panel>
            <p>Panel 2</p>
          </Panel>
          <Panel>
            <p>panel 3</p>
          </Panel>
        </Tabs>
        {/* <div className="container">
          <Tab>
            <div className="d-flex justify-content-center food-items">
              <Tab>
                <h6>Breakfast</h6>
              </Tab>
              <Tab>
                <h6>Dinner</h6>
              </Tab>
              <Tab>
                <h6>Lunch</h6>
              </Tab>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <Panel>
                {foods.slice(0, 6).map((food) => (
                  <FoodItem food={food} key={food.id}></FoodItem>
                ))}
              </Panel>
              <Panel>
                {foods.slice(6, 12).map((food) => (
                  <FoodItem food={food} key={food.id}></FoodItem>
                ))}
              </Panel>
              <Panel>
                {foods.slice(12, 18).map((food) => (
                  <FoodItem food={food} key={food.id}></FoodItem>
                ))}
              </Panel>
            </div>
          </Tab>
        </div> */}
      </>
    );
};

export default Food;