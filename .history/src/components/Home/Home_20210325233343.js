import React from 'react';
import DeliveryFood from '../DeliveryFood/DeliveryFood';
import Food from '../Food/Food';
import FoodDetail from '../FoodDetails/FoodDetail';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Food />
            <FoodDetail/>
            <DeliveryFood />
            <Footer/>
        </>
    );
};

export default Home;