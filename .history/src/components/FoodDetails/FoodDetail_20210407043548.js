import { faMinus, faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from "../../App";
import SearchBar from "../SearchBar/SearchBar";
import './FoodDetail.css';
const FoodDetail = () => {
    const { foodId } = useParams();
  const [foodDetail, setFoodDetail] = useState({});

  useEffect(() => {
    axios
      .get(`https://red-onion-server-121.herokuapp.com/foodDetails/${foodId}`)
      .then((res) => {
        setFoodDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, [foodId]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const { name, picture, price, description2 } = foodDetail;
    const cart = <FontAwesomeIcon icon={faShoppingCart} />;
    const plus = <FontAwesomeIcon icon={faPlus} />;
    const minus = <FontAwesomeIcon icon={faMinus} />;

  let history = useHistory();
    const handleAddCart = (id) => {
        const food = { ...loggedInUser, count }
        food.foodId = id
      setLoggedInUser(food)
      history.push('/checkOut')
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
              <p>
                <button
                  onClick={() => {
                    handleAddCart(foodId);
                  }}
                  className="foodDetails-btn"
                >
                  {cart}Add
                </button>
              </p>
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