import React from 'react';
import Banner from '../components/Banner';
import CategoriesSection from '../components/CategoriesSection';
import PopularMenuSection from '../components/PopularMenuSection.';
import AboutSection from '../components/AboutSection';
import CTA from '../components/CTA';
import FeaturedSection from '../components/FeaturedSection';
import TestimonialSection from '../components/TestimonialSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoriesSection></CategoriesSection>
            <AboutSection></AboutSection>
            <PopularMenuSection></PopularMenuSection>
            <CTA></CTA>
            <FeaturedSection></FeaturedSection>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;