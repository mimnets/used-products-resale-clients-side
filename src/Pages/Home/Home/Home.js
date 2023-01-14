import React from 'react';
import AdvertisedItems from '../../Home/AdvertisedItems/AdvertisedItems'
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer'
import Categories from '../Categories/Categories';
import Members from '../Memebers/Members';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-3xl font-bold mt-5'>Sponsored Ads</h2>
            <AdvertisedItems></AdvertisedItems>
            <h2 className='text-3xl font-bold mt-10'>Categories</h2>
            <Categories></Categories>
            <Members></Members>
            <Footer></Footer>
        </div>
    );
};

export default Home;