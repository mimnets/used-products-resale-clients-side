import React, { useEffect, useState } from 'react';
import DisplayCategories from './DisplayCategories';

const Categories = () => {
    const [categories, setCategories] = useState();

    useEffect(()=>{
        fetch('https://used-products-resale-server-mimnets.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8'>
            {
                categories?.map(category => <DisplayCategories category={category}></DisplayCategories>)
            }
        </div>
    );
};

export default Categories;