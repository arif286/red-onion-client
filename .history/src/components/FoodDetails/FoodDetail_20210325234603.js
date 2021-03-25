import React, { useState } from 'react';
import { useParams } from 'react-router';
import mockData from '../../mockData/MOCK_DATA.json';

const FoodDetail = () => {
    const { foodId } = useParams();
    const [foodDetail, setFoodDetail] = useState(mockData);
    const foodItems = foodDetail.find(food => food.id === foodId)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <h4>hello</h4>
                    <p></p>
                    <p></p>
                    <button>Add</button>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <img src alt=''/>
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;