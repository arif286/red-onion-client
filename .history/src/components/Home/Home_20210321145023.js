import React from 'react';
import Food from '../Food/Food';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    return (
        <>
            <Header />
            <SearchBar />
            <Food/>
        </>
    );
};

export default Home;