import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({allFeatures}) => {
    console.log(allFeatures)
    return (
        <div className=''>
             <div className='flex align-middle my-2'>
                <CheckCircleIcon className="h-6 w-6 text-white mr-3"/>
                <p>{allFeatures}</p>
            </div>
        </div>
    );
};

export default Feature;