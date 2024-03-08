import React from 'react';
import Banner from '../Banner';
import Contact from '../Contact';
import FAQ from '../FAQ';
import BooksCategory from '../../Components/BooksCategory';
import HomeSlider from '../HomeSlider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BooksCategory></BooksCategory>
            <Contact></Contact>
            <HomeSlider></HomeSlider>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;