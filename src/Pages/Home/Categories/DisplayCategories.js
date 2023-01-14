import React from 'react';

const DisplayCategories = ({category}) => {
    const { img, category_name } = category;
    return (
        <div className={'card md:card-side bg-base-100 shadow-xl p-6'}>
            <img className='w-2/5' src={img} alt="" />
            <div className="card-body">
                <h2 className="card-title">{category_name}</h2>
            </div>
        </div>
    );
};

export default DisplayCategories;