import React from 'react';
import DeliveryFood from '../DeliveryFood/DeliveryFood';
import Food from '../Food/Food';

const Home = () => {
    return (
      <>
            <SearchBar/>
        <Food />
        <DeliveryFood />
      </>
    );
};

export default Home;