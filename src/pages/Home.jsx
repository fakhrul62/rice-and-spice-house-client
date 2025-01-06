import React from 'react';
import Banner from '../components/Banner';
import CategoriesSection from '../components/CategoriesSection';
import PopularMenuSection from '../components/PopularMenuSection.';
import AboutSection from '../components/AboutSection';
import CTA from '../components/CTA';
import FeaturedSection from '../components/FeaturedSection';
import TestimonialSection from '../components/TestimonialSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rice & Spice House</title>
                <link rel="canonical" href="" />
            </Helmet>
            <Banner></Banner>
            <CategoriesSection></CategoriesSection>
            <AboutSection></AboutSection>
            <PopularMenuSection></PopularMenuSection>
            <FeaturedSection></FeaturedSection>
            <CTA></CTA>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;