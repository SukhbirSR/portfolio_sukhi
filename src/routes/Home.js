import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';
import Work from '../components/Work';
import Form from '../components/Form';

const Home = () => {
  return (
    <>
        <Navbar/>
        <HeroImg/>
        <AboutContent/>
        <Work/>
        <Form/>
        <Footer/> 
    </>
  )
}

export default Home