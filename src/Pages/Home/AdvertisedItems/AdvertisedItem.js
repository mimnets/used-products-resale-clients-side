import React from 'react';

const AdvertisedItem = ({adItem}) => {
    const { title, img, category} = adItem;
    return (
        <div className={'card md:card-side bg-base-100 shadow-xl p-6'}>
            <img className='w-1/2' src={img} alt="" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Category: <strong>{category}</strong></p>
            </div>
        </div>
    );
};

export default AdvertisedItem;