import React from 'react';
import img from '../../../Sources/error/critical-error-icon-8363117.jpg'
const PaseError = () => {
    return (
        <div className='text-center container  my-8'>
            {/* <h1 ><FaQq className='text-info'></FaQq></h1> */}

            <div className='flex justify-center mb-8'>
                <img src={img} alt="" className='h-1/4 w-1/4' />
            </div>
            <h4>....oops! Something went <span className='text-danger my-6'>wrong</span> . Go back to home page.</h4></div>

    );
};

export default PaseError;