import React, { useEffect, useState } from 'react';
import AdvertisedItem from './AdvertisedItem';


const AdvertisedItems = () => {
    const [adItems, setAdItems] = useState();
    // console.log(adItems.length);

    useEffect(()=>{
        fetch('https://used-products-resale-server-mimnets.vercel.app/advertiseditems')
        .then(res => res.json())
        .then(data => setAdItems(data))
    },[])

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8'>
            {
                adItems?.map(adItem => <AdvertisedItem adItem={adItem}></AdvertisedItem>)
            }
        </div>
    );
};

export default AdvertisedItems;