import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import MasonrySection from '../components/MasonrySection';
import { Accordion } from '../components/Accordion';



function Home() {
    return (
        <div className="Home mb">
            <Navbar/>
            <Carousel/>
            <MasonrySection/>
            {/* <Accordion/> */}
        </div>
    );
}

export default Home;
