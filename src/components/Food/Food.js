
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useHistory } from "react-router";
import RingLoader from "react-spinners/RingLoader";
import "./Food.css";
import FoodItem from "./FoodItem";

const Food = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] =useState(true)
  useEffect(() => {
    axios
      .get("https://red-onion-server-121.herokuapp.com/foods")
      .then((res) => {
        if (res.data) {
          setFoods(res.data);
          setLoading(false)
        }

      })
      .catch((err) => console.log(err));
  }, []);
  let history = useHistory()

  const handleFood = (id) => {
    history.push(`/food/details/${id}`)
  }
  const dinner = foods.filter((item) => item.category === 'dinner');
  const lunch = foods.filter((item) => item.category === "lunch");
  const breakfast = foods.filter((item) => item.category === "breakfast");

  return (
    <>
      <div className="container mt-4">
        {foods.length === 0 ? (
          <div className="spinner">
            <RingLoader color="red" loading={loading} size={80} />
          </div>
        ) : (
          <Tabs
            className="justify-content-center food-items"
            defaultActiveKey="breakfast"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="breakfast" title="Breakfast">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {breakfast.map((food) => (
                  <FoodItem
                    handleFood={() => {
                      handleFood(food._id);
                    }}
                    food={food}
                    key={food.id}
                  ></FoodItem>
                ))}
              </div>
            </Tab>
            <Tab eventKey="dinner" title="Dinner">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {dinner.map((food) => (
                  <FoodItem
                    handleFood={() => {
                      handleFood(food._id);
                    }}
                    food={food}
                    key={food.id}
                  ></FoodItem>
                ))}
              </div>
            </Tab>
            <Tab eventKey="lunch" title="Lunch">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {lunch.map((food) => (
                  <FoodItem
                    handleFood={() => {
                      handleFood(food._id);
                    }}
                    food={food}
                    key={food.id}
                  ></FoodItem>
                ))}
              </div>
            </Tab>
          </Tabs>
        )}
      </div>
    </>
  );
};

export default Food;
