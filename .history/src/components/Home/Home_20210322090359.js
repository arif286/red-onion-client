import React from 'react';
import DeliveryFood from '../DeliveryFood/DeliveryFood';
import Food from '../Food/Food';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    return (
        <>
            <Header />
            <SearchBar />
            <Food />
            <DeliveryFood/>
        </>
    );
};

export default Home;