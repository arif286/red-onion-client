import React from 'react';

const FoodItem = (props) => {
    console.log(props)
    const { name, picture, description, price } = props.food;
    return (
      <>
        <div className="col py-3">
          <div className="card h-100">
            <img src={picture} className="card-img-top fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ name}</h5>
              <p className="card-text">
                {description}
              </p>
              <h4 className='text-center'>price: ${price}</h4>
            </div>
          </div>
        </div>
      </>
    );
};

export default FoodItem;