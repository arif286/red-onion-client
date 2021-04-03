import { faShoppingCart, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import mockData from '../../mockData/MOCK_DATA.json';
import SearchBar from "../SearchBar/SearchBar";
import './FoodDetail.css';
const FoodDetail = () => {
    const { foodId } = useParams();
    const [foodDetail, setFoodDetail] = useState(mockData);
    const foodItem = foodDetail.find(food => food.id === Number(foodId));
    const { name, picture, price, description2 } = foodItem;
    const cart = <FontAwesomeIcon icon={faShoppingCart} />;
    const plus = <FontAwesomeIcon icon={faUserPlus} />;

    let history = useHistory;
    const handleDelivery = () => {
    //    history.push('/')
    }

    const [count, setCount] = useState(1);
    return (
        <>
            <SearchBar/>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 col-sm-12 pb-3">
                    <h4>{name}</h4>
                    <p style={{ fontSize: "14px" }} className="text-justify mt-3">
                        {description2}
                    </p>
                        <p className="food-price">${price}</p>
                        <p><small></small></p>
                    <button onClick={handleDelivery()} className="foodDetails-btn">{cart}Add</button>
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