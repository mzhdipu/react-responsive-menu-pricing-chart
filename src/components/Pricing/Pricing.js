import React from 'react';
import PriceOption from '../PriceOption/PriceOption';


const Pricing = () => {
    const pricing = [
        {id : 1, package : "Basic", price : 200, features : [
            "Feature 001",
            "Feature 002",
            "Feature 003",
            "Feature 004",
            "Feature 005",
            "Feature 006",
            "Feature 007",
        ]},
        {id : 2, package : "Premium", price : 400, features : [
            "Feature 001",
            "Feature 002",
            "Feature 003",
            "Feature 004",
            "Feature 005",
            "Feature 006",
            "Feature 007",
        ]},
        {id : 3, package : "Advance", price : 600, features : [
            "Feature 001",
            "Feature 002",
            "Feature 003",
            "Feature 004",
            "Feature 005",
            "Feature 006",
            "Feature 007",
        ]}
    ]
    return (
        <div className='my-20'>
            <h1 className='md:text-5xl text-2xl font-bold'>Best Deal of the Town</h1>

            <div className='mt-20 mt- grid md:grid-cols-3 gap-10 px-5'>
                {
                    pricing.map(pricePackage => <PriceOption key={pricePackage.id} option = {pricePackage}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;