import React from 'react';
import { useParams } from 'react-router';

const FoodDetail = () => {
    const { id } = useParams();
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