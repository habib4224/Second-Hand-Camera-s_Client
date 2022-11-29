import React from 'react';

const EachCatagori = ({ subCategory, setModalDetails }) => {

    const { Product_Name, img, name, Location, Original_Price, Resell_Price, Years_of_Use, email } = subCategory;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure className='h-1/2'><img src={img} alt="Shoes" /></figure>

            <div className="card-body">
                <h2 className="card-title text center font-bold text-primary text-center"><h1>{Product_Name}</h1></h2>
                <p className='text-blue-900 font-bold'>Seller Name: <span className='text-black'>{name}</span></p>
                <p className='text-blue-900 font-bold'>Product Name: <span className='text-black'>{Product_Name}</span> </p>
                <p className='text-blue-900 font-bold'>Location: <span className='text-black'>{Location}</span> </p>
                <p className='text-blue-900 font-bold'>Original Price: <span className='text-black'>{Original_Price}</span> </p>
                <p className='text-blue-900 font-bold'>Resell Price: <span className='text-black'>{Resell_Price}</span> </p>
                <p className='text-blue-900 font-bold'>Years of Use: <span className='text-black'>{Years_of_Use}</span> </p>
                <p className='text-blue-900 font-bold'>Seller Email: <span className='text-black'>{email}</span> </p>

                <div className="card-actions">
                    <label onClick={() => setModalDetails(subCategory)} htmlFor="Booking-modal" className="btn w-full btn-primary">Buy Now</label>
                </div>
            </div>
        </div>
    );
};


export default EachCatagori;