import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import Welcome from '../components/Welcome';
import Themes from '../components/Themes';
import RegisterCard from '../components/RegisterCard';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <>
    
    <HeroSection />
    <Welcome /> 
    <CountdownTimer />
    <Themes />
    <RegisterCard />
    </>
  );
};

export default Home;