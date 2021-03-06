import React, { useState } from 'react';
import { useParams } from 'react-router';
import mockData from '../../mockData/MOCK_DATA.json';

const FoodDetail = () => {
    const { foodId } = useParams();
    const [foodDetail, setFoodDetail] = useState(mockData);
    const foodItem = foodDetail.find(food => food.id === Number(foodId));
    const { name, picture, price, description2 } = foodItem;
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6 col-sm-12'>
                    <h4>{name}</h4>
                    <p style={{fontSize:'14px'}} className='text-justify mt-3'>{description2}</p>
                    <p>${price}</p>
                    <button>Add</button>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <img className='img-fluid' src={picture} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;