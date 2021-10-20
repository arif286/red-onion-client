import React from 'react';
import { Link } from 'react-router-dom';
import deliveryImg from '../../assets/ICON/Group 204.png';
import burger from '../../assets/Image/burger.png';


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
            <div className='card'>
                <img src={burger} alt=''/>
                <div className='card-body'>
                    <div className=''>
                        <img src={deliveryImg} alt=''/>
                    </div>
                    <div>
                        <h1>Fast Delivery</h1>
                        <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                        <Link>See more</Link>
                    </div>
                </div>

            </div>
      </div>
    );
};

export default DeliveryFood;