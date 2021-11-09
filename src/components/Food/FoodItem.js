import React from 'react';

const FoodItem = ({food:{name,picture,description,price}, handleFood}) => {
    return (
      <>
        <div className="col py-3">
          <div
            onClick={() => {
              handleFood();
            }}
            className="card h-100 food-card"
          >
              <img src={picture} className="card-img-top fluid" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <div className="card-body d-flex justify-content-between">
                <p className="">price: ${price}</p>
                <button className="btn btn-danger">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default FoodItem;