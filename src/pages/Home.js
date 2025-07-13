import React from 'react';
import introImage from '../assets/home.png'; // Replace with your actual image

const Home = () => (
    <div className="home-container">
        <h1>Welcome to the Shared Pantry App</h1>
        <img src={introImage} alt="Shared Pantry" className="intro-image" />
    </div>
);

export default Home;
