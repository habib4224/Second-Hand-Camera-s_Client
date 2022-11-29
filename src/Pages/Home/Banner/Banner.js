import React from 'react';
import bannerImg from '../../../Sources/Banner/Banner image.jpg';

const Banner = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className='ml-5 p-4'>
                    <h1 className="pb-6 text-5xl text-Primary font-bold ">Looking to buy an affordable & Best Condition Camera?</h1>
                    <button className=" w-full btn btn-primary">Let's Explore</button>
                </div>
                <img src={bannerImg} className="w-full rounded-lg shadow-2xl" alt='' />
            </div>
        </div>
    );
};


export default Banner;