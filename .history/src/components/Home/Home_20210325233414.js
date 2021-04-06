import React from 'react';
import DeliveryFood from '../DeliveryFood/DeliveryFood';
import Food from '../Food/Food';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Food />
            <DeliveryFood />
            <Footer/>
        </>
    );
};

export default Home;