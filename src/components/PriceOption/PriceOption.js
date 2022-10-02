import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features} = option
    return (
        <div className='bg-orange-500 p-5 rounded-md'>
            <h3 className='text-4xl text-bold mb-5'>{option.package}</h3>
            <h4>
                <span className='text-5xl font-extrabold'>${option.price}</span>
                <span>/per monthe</span>
            </h4>
              
            {
                features.map((feature, idx) => <Feature key={idx} allFeatures = {feature}></Feature>)
            }
            <button className='py-4 px-5 bg-[#facc15] font-bold mt-3 rounded-md w-full'>Buy Now</button>
        </div>
    );
};

export default PriceOption;