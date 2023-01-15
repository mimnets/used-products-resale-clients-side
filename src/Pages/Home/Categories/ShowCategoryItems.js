import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowCategoryItems = () => {
    const {category_name, img, category_id} = useLoaderData()
    const [phoneListings, setPhoneListings] = useState()
    console.log(phoneListings)

    useEffect(()=>{
        fetch(`https://used-products-resale-server-mimnets.vercel.app/phone-listings/${category_id}}`)
        .then(res => res.json())
        .then(data => setPhoneListings(data));
    },[category_id])

    return (
        <div>
            <h2>Category Name: {category_name}</h2>
        </div>
    );
};

export default ShowCategoryItems;