import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import MasonrySection from '../components/MasonrySection';

function Home() {
    return (
        <div className="Home mt-5">
            <Carousel/>
            <MasonrySection/>
        </div>
    );
}

export default Home;
