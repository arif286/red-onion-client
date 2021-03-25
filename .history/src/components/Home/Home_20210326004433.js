import React from 'react';
import DeliveryFood from '../DeliveryFood/DeliveryFood';
import Food from '../Food/Food';
import SearchBar from '../SearchBar/SearchBar';

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