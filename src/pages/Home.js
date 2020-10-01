import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import HomepageBottomSection from '../components/HomepageBottomSection';
import FeaturedTestCards from '../components/FeaturedTestCards';
import SubscribeNudge from '../components/SubscribeNudge';

import SecondTitle from '../smallComponents/SecondTitle';

const Home = () => {
  return (
    <main>
      <Hero />

      <section className='featured-tests-section'>
        <SecondTitle
          className='featured-tests-title text-center second-title'
          title='Health Assessment for you from anywhere'
        />
        <FeaturedTestCards />
        <Link className='browse-tests-link' to='/tests'>
          Browse More Tests
        </Link>
      </section>

      <HomepageBottomSection />

      <SubscribeNudge />
    </main>
  );
};

export default Home;
