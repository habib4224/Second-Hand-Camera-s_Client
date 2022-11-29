import React from 'react';
import { Link } from 'react-router-dom';

const AboutOurService = () => {
    return (
        <div className="hero h-screen mt-8" style={{ backgroundImage: `url('https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2015/12/sell-gear-online-craigslist-offerup-local-fstoppers-casey-berner.jpg')` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-primary  font-bold">About Us</h1>
                    <p className="mb-5 text-lg">We're Camera People. The original curator and reseller of rare and quality camera gear we  always envisioned a better way to support the passion and profession of photography.</p>
                    <Link to={'/'}><button className="btn btn-primary">Read More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutOurService;