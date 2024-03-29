import React from 'react';
import './Home.css'
import AdsSlider from './AdsSlider';
import { Genre, Online, Recommended, Rent, Trending } from './Cards';
import LoginForm from '../Login/LoginForm';

const Home = () => {
    return (
        <>
            <AdsSlider/>
            <Trending/>
            <Recommended/>
            <LoginForm/>
            <Genre/>
            <Online/>
            <Rent/>
        </>
    );
};

export default Home;