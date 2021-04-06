
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import mockData from "../../mockData/MOCK_DATA.json";
import "./Food.css";
import FoodItem from "./FoodItem";

const Food = () => {
  const [foods, setFoods] = useState(mockData);

  return (
    <>
      <div className="container mt-5">

          <Tabs
            className="justify-content-center food-items"
            defaultActiveKey="breakfast"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="breakfast" title="Breakfast">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {foods.slice(0, 6).map((food) => (
                  <FoodItem food={food} key={food.id}></FoodItem>
                ))}
              </div>
            </Tab>
            <Tab eventKey="dinner" title="Dinner">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {foods.slice(6, 12).map((food) => (
                  <FoodItem food={food} key={food.id}></FoodItem>
                ))}
              </div>
            </Tab>
            <Tab eventKey="lunch" title="Lunch">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {foods.slice(12, 18).map((food) => (
                  <FoodItem food={food} key={food.id}></FoodItem>
                ))}
              </div>
            </Tab>
          </Tabs>
          <div className='d-flex justify-content-center'>
            <button className="btn btn-danger">Proceed Your Order</button>
          </div>
      </div>
    </>
  );
};

export default Food;
