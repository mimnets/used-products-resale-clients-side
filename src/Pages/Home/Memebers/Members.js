import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Members = () => {
    return (
        <div className="hero min-h-screen mt-10" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Become a member and get discount and special offer from us...</p>
                    <PrimaryButton>Become A Member</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Members;