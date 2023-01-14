import React from 'react';
import mobile from '../../../assets/images/Used-Mobile.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row my-10">
                <img src={mobile} className="lg:w-1/2 rounded-lg shadow-2xl" alt=""/>
                <div className="">
                    <h1 className="text-5xl font-bold">Your trusted used phone <br/> Marketplace</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Post Your Ad</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;