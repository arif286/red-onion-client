import React from 'react';
import { Link } from 'react-router-dom';
import deliveryImg from '../../assets/ICON/Group 204.png';
import burger from '../../assets/Image/burger.png';
import cart from '../../assets/Image/cart-bear.png';
import chefCook from '../../assets/Image/chef-cook.png';


const DeliveryFood = () => {
    return (
      <div className="container mt-4">
        <div>
          <h4>Why you choose us</h4>
          <p>
            Red onion is most popular food in Bangladesh because of it's service
            and fastest delivery at any place.
          </p>
        </div>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          <div className="card p-2">
            <img src={burger} alt="" />
            <div className="d-flex card-body">
              <div className="p-3">
                <img src={deliveryImg} alt="" />
              </div>
              <div>
                <h1>Fast Delivery</h1>
                <p>
                  Keep your systems in sync with automated web hook based
                  notifications each time link is paid and how we dream about
                  our future
                </p>
                <Link>See more</Link>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={chefCook} alt="" />
            <div className="d-flex card-body">
              <div className="p-3">
                <img src={deliveryImg} alt="" />
              </div>
              <div>
                <h1>Fast Delivery</h1>
                <p>
                  Keep your systems in sync with automated web hook based
                  notifications each time link is paid and how we dream about
                  our future
                </p>
                <Link>See more</Link>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={cart} alt="" />
            <div className="d-flex card-body">
              <div className="p-3">
                <img src={deliveryImg} alt="" />
              </div>
              <div>
                <h1>Fast Delivery</h1>
                <p>
                  Keep your systems in sync with automated web hook based
                  notifications each time link is paid and how we dream about
                  our future
                </p>
                <Link>See more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DeliveryFood;