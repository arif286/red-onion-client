import { faMinus, faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from "react-router-dom";
import { UserContext } from "../../App";
import mockData from '../../mockData/MOCK_DATA.json';
import SearchBar from "../SearchBar/SearchBar";
import './FoodDetail.css';
const FoodDetail = () => {
    const { foodId } = useParams();
    const [foodDetail, setFoodDetail] = useState(mockData);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const foodItem = foodDetail.find(food => food.id === Number(foodId));
    const { name, picture, price, description2, id } = foodItem;
    const cart = <FontAwesomeIcon icon={faShoppingCart} />;
    const plus = <FontAwesomeIcon icon={faPlus} />;
    const minus = <FontAwesomeIcon icon={faMinus} />;


    const handleAddCart = (id) => {
        const food = { ...loggedInUser }
        food.foodItem = id
        setLoggedInUser(food)
    };

    const [count, setCount] = useState(1);
    const handleMinusCount = () => {
        if (count <1) {
            setCount(0)
        }
        else {
            setCount(count - 1)
        }
    }
    return (
      <>
        <SearchBar />
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 col-sm-12 pb-3">
              <h4>{name}</h4>
              <p style={{ fontSize: "14px" }} className="text-justify mt-3">
                {description2}
              </p>
              <div>
                <p className="food-price">${price}</p>
                <p className="add-cart">
                  <small onClick={handleMinusCount}>{minus}</small>
                  {count}
                  <small
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    {plus}
                  </small>
                </p>
              </div>
              <NavLink to='/cart'>
                <button
                  onClick={() => {
                    handleAddCart(id);
                  }}
                  className="foodDetails-btn"
                >
                  {cart}Add
                </button>
              </NavLink>
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <img className="foodDetails-img" src={picture} alt="" />
            </div>
          </div>
        </div>
      </>
    );
};

export default FoodDetail;